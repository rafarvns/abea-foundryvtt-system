"""
Scrapes the Foundry VTT API documentation (TypeDoc) for a given version and
converts every page to Markdown.

Usage:
    python tools/scripts/scrape_fvtt_api.py            # defaults to v14
    python tools/scripts/scrape_fvtt_api.py --version v13

Output: docs/<version>/fvtt_api_docs/<category>/<page>.md + INDEX.md
"""
import argparse
import base64
import json
import zlib
import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
import concurrent.futures
import time
import re
from urllib.parse import urljoin, urlparse
import logging
from pathlib import Path

# Configuration
DEFAULT_VERSION = "v14"
REPO_ROOT = Path(__file__).resolve().parents[2]
MAX_WORKERS = 8
MAX_RETRIES = 3
RETRY_DELAY = 1  # seconds

BASE_URL = None
OUTPUT_DIR = None

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("scraper.log"),
        logging.StreamHandler()
    ]
)

session = requests.Session()


def setup_directories():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    logging.info(f"Output directory: {OUTPUT_DIR}")


def fetch_url(url, retries=0):
    try:
        response = session.get(url, timeout=20)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        if retries < MAX_RETRIES:
            time.sleep(RETRY_DELAY * (retries + 1))
            return fetch_url(url, retries + 1)
        logging.error(f"Failed to fetch {url}: {e}")
        return None


def extract_links_from_navigation():
    """
    TypeDoc stores the full sidebar tree in assets/navigation.js as
    base64-encoded, zlib-compressed JSON. It lists every documented page.
    """
    js = fetch_url(urljoin(BASE_URL, "assets/navigation.js"))
    if not js:
        return []
    match = re.search(r'"([A-Za-z0-9+/=]+)"', js)
    if not match:
        logging.error("Could not parse navigation.js")
        return []
    tree = json.loads(zlib.decompress(base64.b64decode(match.group(1))))

    links = set()

    def walk(nodes):
        for node in nodes:
            path = node.get("path")
            if path:
                links.add(urljoin(BASE_URL, path.split('#')[0]))
            walk(node.get("children", []))

    walk(tree)
    return sorted(links)


def extract_links_from_index(html):
    """Fallback: only pages linked directly from the index page."""
    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    for a in soup.find_all('a', href=True):
        full_url = urljoin(BASE_URL, a['href']).split('#')[0]
        if full_url.startswith(BASE_URL) and full_url.endswith('.html'):
            links.add(full_url)
    return sorted(links)


def rewrite_links(content_div):
    """Point relative .html links to the local .md files."""
    for a in content_div.find_all('a', href=True):
        href = a['href']
        if href.startswith(('http://', 'https://', '#', 'mailto:')):
            continue
        a['href'] = re.sub(r'\.html(?=$|#)', '.md', href)


def parse_and_save(url):
    html = fetch_url(url)
    if not html:
        return None

    soup = BeautifulSoup(html, 'html.parser')

    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else "Untitled"

    content_div = soup.find('div', class_='col-content') or soup.find('main') or soup.find('article')

    if not content_div:
        content_div = soup.find('body')
        for tag in content_div.find_all(['nav', 'header', 'footer', 'aside']):
            tag.decompose()
    else:
        for tag in content_div.find_all(class_='tsd-breadcrumb'):
            tag.decompose()

    for tag in content_div.find_all(['script', 'style', 'svg']):
        tag.decompose()

    rewrite_links(content_div)

    markdown_content = md(str(content_div), heading_style="atx")
    markdown_content = re.sub(r'\n{3,}', '\n\n', markdown_content)

    # URL structure example: https://foundryvtt.com/api/v14/classes/foundry.abstract.DataModel.html
    relative = url[len(BASE_URL):]
    path_parts = [p for p in relative.split('/') if p]

    if len(path_parts) >= 2:
        category = path_parts[0]  # e.g., classes, interfaces, variables
        filename = path_parts[-1]
    else:
        category = "uncategorized"
        filename = path_parts[-1] if path_parts else "index.html"

    filename = filename.replace('.html', '.md')

    category_dir = OUTPUT_DIR / category
    category_dir.mkdir(parents=True, exist_ok=True)
    filepath = category_dir / filename

    frontmatter = f"""---
title: "{title}"
url: "{url}"
category: "{category}"
---

"""

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(frontmatter + markdown_content)

    # Simple heuristic: first line of text that isn't a header
    description = "No description available."
    for line in markdown_content.split('\n'):
        if line.strip() and not line.strip().startswith('#'):
            description = line.strip()[:200] + "..."
            break

    return {
        "title": title,
        "url": url,
        "category": category,
        "filepath": str(filepath.relative_to(OUTPUT_DIR)),
        "description": description.replace('|', '\\|').replace('\n', ' ')
    }


def generate_index(results, version):
    index_path = OUTPUT_DIR / "INDEX.md"

    categories = {}
    for item in results:
        if not item:
            continue
        categories.setdefault(item['category'], []).append(item)

    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(f"# Foundry VTT API Documentation Index ({version})\n\n")
        f.write(f"Source: {BASE_URL}\n\n")
        f.write(f"Generated on {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")

        for cat in sorted(categories.keys()):
            f.write(f"## {cat.capitalize()}\n\n")
            f.write("| Title | File | Description |\n")
            f.write("|-------|------|-------------|\n")

            for item in sorted(categories[cat], key=lambda x: x['title']):
                title = re.sub(r"\s*\|\s*Foundry Virtual Tabletop.*$", "", item['title'])
                title = title.replace("|", "\\|")
                link = item['filepath'].replace('\\', '/')
                f.write(f"| {title} | [{link}]({link}) | {item['description']} |\n")

            f.write("\n")

    logging.info(f"Index generated at {index_path}")


def main():
    global BASE_URL, OUTPUT_DIR

    parser = argparse.ArgumentParser(description="Scrape Foundry VTT API docs to Markdown.")
    parser.add_argument("--version", default=DEFAULT_VERSION, help="API version, e.g. v14 or v13")
    args = parser.parse_args()

    version = args.version
    BASE_URL = f"https://foundryvtt.com/api/{version}/"
    OUTPUT_DIR = REPO_ROOT / "docs" / version / "fvtt_api_docs"

    setup_directories()

    logging.info(f"Fetching navigation from {BASE_URL}...")
    links = extract_links_from_navigation()
    if not links:
        logging.warning("navigation.js unavailable, falling back to index page links.")
        index_html = fetch_url(BASE_URL)
        if not index_html:
            logging.error("Could not fetch index page. Aborting.")
            return
        links = extract_links_from_index(index_html)

    logging.info(f"Found {len(links)} unique pages to scrape.")

    results = []

    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(parse_and_save, url): url for url in links}

        completed = 0
        total = len(links)

        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                data = future.result()
                if data:
                    results.append(data)
                completed += 1
                if completed % 50 == 0:
                    logging.info(f"Progress: {completed}/{total}")
            except Exception as exc:
                logging.error(f"{url} generated an exception: {exc}")

    logging.info(f"Scraped {len(results)}/{len(links)} pages. Generating index...")
    generate_index(results, version)
    logging.info("Done!")


if __name__ == "__main__":
    main()

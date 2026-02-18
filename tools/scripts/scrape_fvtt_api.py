import os
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
BASE_URL = "https://foundryvtt.com/api/"
OUTPUT_DIR = Path(__file__).parent / "fvtt_api_docs"
MAX_WORKERS = 20
MAX_RETRIES = 3
RETRY_DELAY = 1  # seconds

# Setup Logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("scraper.log"),
        logging.StreamHandler()
    ]
)

def setup_directories():
    if not OUTPUT_DIR.exists():
        OUTPUT_DIR.mkdir(parents=True)
    logging.info(f"Output directory: {OUTPUT_DIR}")

def fetch_url(url, retries=0):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        if retries < MAX_RETRIES:
            time.sleep(RETRY_DELAY * (retries + 1))
            return fetch_url(url, retries + 1)
        else:
            logging.error(f"Failed to fetch {url}: {e}")
            return None

def extract_links(html, base_url):
    soup = BeautifulSoup(html, 'html.parser')
    links = set()
    # The API docs main page seems to list classes, interfaces, etc.
    # We want to catch links that start with the base_url or valid relative paths
    for a in soup.find_all('a', href=True):
        href = a['href']
        full_url = urljoin(base_url, href)
        
        # Filter strictly for API sub-pages
        if full_url.startswith(base_url) and full_url != base_url:
             # Ignore anchors within the same page if they just point to #
             if '#' in href and not href.startswith('#'):
                 # It might be page.html#anchor, which we treat as page.html
                 full_url = full_url.split('#')[0]
             elif href.startswith('#'):
                 continue
            
             # Only html pages
             if full_url.endswith('.html'):
                 links.add(full_url)
    
    return list(links)

def parse_and_save(url):
    html = fetch_url(url)
    if not html:
        return None

    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract Title
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True) if title_tag else "Untitled"
    
    # Attempt to find the main content
    # Based on standard TypeDoc or similar templates, often it's in a specific div
    # Inspection of the provided chunk suggests structure. 
    # Usually <div class="col-content"> or <article> or <main>
    # Let's try to be generic or find the specific one.
    # If we can't find a specific container, we might grab body but strip nav.
    
    content_div = soup.find('div', class_='col-content')
    if not content_div:
        content_div = soup.find('main')
    if not content_div:
        content_div = soup.find('article')
    
    # Fallback: remove header, nav, footer and take body
    if not content_div:
        content_div = soup.find('body')
        for tag in content_div.find_all(['nav', 'header', 'footer', 'aside']):
            tag.decompose()
    else:
        # Even inside content, remove breadcrumbs if possible to clean up
        for tag in content_div.find_all('div', class_='tsd-breadcrumb'):
            tag.decompose()

    # Convert to Markdown
    markdown_content = md(str(content_div), heading_style="atx")
    
    # Clean up excessive newlines
    markdown_content = re.sub(r'\n{3,}', '\n\n', markdown_content)

    # Determine Category and Filename
    # URL structure example: https://foundryvtt.com/api/classes/foundry.abstract.DataModel.html
    parsed_url = urlparse(url)
    path_parts = parsed_url.path.strip('/').split('/')
    
    # removal of 'api' prefix if present from split
    if 'api' in path_parts:
        path_parts.remove('api')
        
    if len(path_parts) >= 2:
        category = path_parts[0] # e.g., classes, interfaces, variables
        filename = path_parts[-1] # e.g., foundry.abstract.DataModel.html
    else:
        category = "uncategorized"
        filename = path_parts[-1] if path_parts else "index.html"

    filename = filename.replace('.html', '.md')
    
    # Ensure category dir exists
    category_dir = OUTPUT_DIR / category
    category_dir.mkdir(parents=True, exist_ok=True)
    
    filepath = category_dir / filename
    
    # Create Frontmatter
    frontmatter = f"""---
title: "{title}"
url: "{url}"
category: "{category}"
---

"""
    
    # Save File
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(frontmatter + markdown_content)
        
    # Extract brief description (first paragraph)
    description = "No description available."
    # Simple heuristic: first line of text that isn't a header
    lines = markdown_content.split('\n')
    for line in lines:
        if line.strip() and not line.strip().startswith('#'):
            description = line.strip()[:200] + "..."
            break
            
    return {
        "title": title,
        "url": url,
        "category": category,
        "filepath": str(filepath.relative_to(OUTPUT_DIR)),
        "description": description.replace('|', '\|') # Escape pipes for markdown table
    }

def generate_index(results):
    index_path = OUTPUT_DIR / "INDEX.md"
    
    # Group by category
    categories = {}
    for item in results:
        if not item: continue
        cat = item['category']
        if cat not in categories:
            categories[cat] = []
        categories[cat].append(item)
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("# Foundry VTT API Documentation Index\n\n")
        f.write(f"Generated on {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        for cat in sorted(categories.keys()):
            f.write(f"## {cat.capitalize()}\n\n")
            f.write("| Title | File | Description |\n")
            f.write("|-------|------|-------------|\n")
            
            for item in sorted(categories[cat], key=lambda x: x['title']):
                title = item['title'].replace("Foundry VTT API - ", "").replace(" | Foundry Virtual Tabletop", "")
                link = item['filepath'].replace('\\', '/')
                f.write(f"| {title} | [{link}]({link}) | {item['description']} |\n")
            
            f.write("\n")
            
    logging.info(f"Index generated at {index_path}")

def main():
    setup_directories()
    
    logging.info(f"Fetching index from {BASE_URL}...")
    index_html = fetch_url(BASE_URL)
    if not index_html:
        logging.error("Could not fetch index page. Aborting.")
        return

    links = extract_links(index_html, BASE_URL)
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
                if completed % 10 == 0:
                    logging.info(f"Progress: {completed}/{total}")
            except Exception as exc:
                logging.error(f"{url} generated an exception: {exc}")

    logging.info("Scraping completed. Generating index...")
    generate_index(results)
    logging.info("Done!")

if __name__ == "__main__":
    main()

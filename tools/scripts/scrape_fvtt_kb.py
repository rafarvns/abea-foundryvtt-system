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
KB_BASE_URL = "https://foundryvtt.com/kb/"
OUTPUT_DIR = Path(__file__).parent / "fvtt_kb_docs"
MAX_WORKERS = 20
MAX_RETRIES = 3
RETRY_DELAY = 1

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler("scraper_kb.log"),
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

def extract_categories_and_links(html, base_url):
    soup = BeautifulSoup(html, 'html.parser')
    category_map = {} # url -> category_name
    
    # Structure of /kb/ page:
    # <div class="category"> or similar wrapper
    # Often headings are categories.
    # Looking at the provided chunk, it seems like headers define sections.
    # <h2 ...>Category Name</h2>
    # <ul><li><a href="...">Article</a></li></ul>
    
    # We will iterate through headers (H2, H3) and find following links
    # This is a bit heuristic but usually works for simple structures.
    
    current_category = "General"
    
    # Find the main content area first
    content_area = soup.find('div', class_='col-content') or soup.find('main') or soup.find('article') or soup.find('body')
    
    # Iterate over relevant elements
    for element in content_area.find_all(['h2', 'h3', 'a']):
        if element.name in ['h2', 'h3']:
            # Clean category name
            cat_name = element.get_text(strip=True)
            # Remove Markdown-style link text if present in header (e.g. "[Category]")
            if cat_name.startswith('[') and cat_name.endswith(']'):
                 pass # Actually the headers in the tool output showed markdown links, but real HTML has just text usually?
                 # If the tool converted it to markdown, we see brackets. In HTML it's likely just <a> inside <h>.
            else:
                 current_category = cat_name
        
        elif element.name == 'a' and element.get('href'):
            href = element.get('href')
            full_url = urljoin(base_url, href)
            
            # Check if it is an article link
            if '/article/' in full_url:
                category_map[full_url] = current_category

    return category_map

def clean_filename(text):
    # Remove invalid characters
    return re.sub(r'[<>:"/\\|?*]', '', text).strip()

def parse_and_save(url, category):
    html = fetch_url(url)
    if not html:
        return None

    soup = BeautifulSoup(html, 'html.parser')
    
    # Extract Title
    title_tag = soup.find('title')
    title = title_tag.get_text(strip=True).replace(" | Foundry Virtual Tabletop", "") if title_tag else "Untitled"
    
    # Extract Content
    content_div = soup.find('div', class_='col-content') or soup.find('main') or soup.find('article')
    
    if not content_div:
        content_div = soup.find('body')
        for tag in content_div.find_all(['nav', 'header', 'footer', 'aside']):
            tag.decompose()
            
    # Cleanup content
    for meta in content_div.find_all(['script', 'style', 'iframe', 'button']):
         meta.decompose()

    # Convert to Markdown
    markdown_content = md(str(content_div), heading_style="atx")
    markdown_content = re.sub(r'\n{3,}', '\n\n', markdown_content)

    # Save to file
    safe_category = clean_filename(category)
    cat_dir = OUTPUT_DIR / safe_category
    cat_dir.mkdir(parents=True, exist_ok=True)
    
    slug = url.strip('/').split('/')[-1]
    filename = f"{slug}.md"
    filepath = cat_dir / filename
    
    frontmatter = f"""---
title: "{title}"
url: "{url}"
category: "{category}"
---

"""
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(frontmatter + markdown_content)
        
    # Get description
    description = "No description."
    lines = markdown_content.split('\n')
    for line in lines:
        if line.strip() and not line.strip().startswith('#') and not line.strip().startswith('['):
             description = line.strip()[:200] + "..."
             break
    
    return {
        "title": title,
        "url": url,
        "category": category,
        "filepath": str(filepath.relative_to(OUTPUT_DIR)),
        "description": description.replace('|', '\|')
    }

def generate_index(results):
    index_path = OUTPUT_DIR / "INDEX.md"
    
    categories = {}
    for item in results:
        if not item: continue
        cat = item['category']
        if cat not in categories:
            categories[cat] = []
        categories[cat].append(item)
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write("# Foundry VTT Knowledge Base Index\n\n")
        f.write(f"Generated on {time.strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        
        for cat in sorted(categories.keys()):
            f.write(f"## {cat}\n\n")
            f.write("| Title | File | Description |\n")
            f.write("|-------|------|-------------|\n")
            
            for item in sorted(categories[cat], key=lambda x: x['title']):
                link = item['filepath'].replace('\\', '/')
                f.write(f"| {item['title']} | [{link}]({link}) | {item['description']} |\n")
            
            f.write("\n")

def main():
    setup_directories()
    
    logging.info(f"Scanning KB index at {KB_BASE_URL}...")
    index_html = fetch_url(KB_BASE_URL)
    if not index_html:
        logging.error("Failed to fetch KB index.")
        return

    category_map = extract_categories_and_links(index_html, KB_BASE_URL)
    unique_links = list(category_map.keys())
    
    logging.info(f"Found {len(unique_links)} articles across {len(set(category_map.values()))} categories.")
    
    results = []
    
    with concurrent.futures.ThreadPoolExecutor(max_workers=MAX_WORKERS) as executor:
        future_to_url = {executor.submit(parse_and_save, url, category_map[url]): url for url in unique_links}
        
        completed = 0
        total = len(unique_links)
        
        for future in concurrent.futures.as_completed(future_to_url):
            url = future_to_url[future]
            try:
                data = future.result()
                if data:
                    results.append(data)
                completed += 1
                if completed % 5 == 0:
                     logging.info(f"Progress: {completed}/{total}")
            except Exception as e:
                logging.error(f"Error processing {url}: {e}")

    logging.info("Generating Index...")
    generate_index(results)
    logging.info("KB Scraping Complete!")

if __name__ == "__main__":
    main()

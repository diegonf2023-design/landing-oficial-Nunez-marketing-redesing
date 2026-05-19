import os
import warnings

# Suppress the NotOpenSSLWarning from urllib3 BEFORE importing requests
# Filter by message pattern to avoid importing urllib3 first (which would trigger the warning)
warnings.filterwarnings("ignore", message=".*urllib3.*LibreSSL.*")
warnings.filterwarnings("ignore", message=".*NotOpenSSLWarning.*")

import requests  # pyre-ignore[21]
from io import BytesIO
from PIL import Image  # pyre-ignore[21]
from urllib.parse import urlparse

def main():
    # Paths configuration
    base_path = "/Users/diegonunez/Landing - marketing"
    rules_file = os.path.join(base_path, "cursor/rules/Imagenes")
    target_dir = os.path.join(base_path, "public/images")
    component_files = [
        os.path.join(base_path, "src/components/sections/Hero.tsx"),
        os.path.join(base_path, "src/components/sections/Portfolio.tsx")
    ]

    # Ensure target directory exists
    os.makedirs(target_dir, exist_ok=True)

    # Collect URLs from rules file
    urls = []
    if os.path.exists(rules_file):
        with open(rules_file, 'r', encoding='utf-8') as f:
            for line in f:
                url = line.strip()
                if url.startswith("http"):
                    urls.append(url)
    
    if not urls:
        print("No URLs found in the rules file.")
        return

    print(f"✅ Found {len(urls)} URLs to process.")

    # Dictionary to track replacements
    url_map = {}

    for url in urls:
        try:
            # Parse URL to get a clean filename
            path = urlparse(url).path
            filename = os.path.basename(path)
            if not filename:
                print(f"⚠️  Could not extract filename from URL, skipping: {url}")
                continue
                
            name_no_ext = os.path.splitext(filename)[0]
            out_name = f"{name_no_ext}.webp"
            out_path = os.path.join(target_dir, out_name)
            local_url = f"/images/{out_name}"
            
            # Skip if already downloaded
            if os.path.exists(out_path):
                print(f"⏭️  Already exists, skipping: {out_name}")
                url_map[url] = local_url
                continue

            print(f"📸 Compressing: {url} -> {out_name}")
            
            # Download and compress
            response = requests.get(url, timeout=15)
            response.raise_for_status()
            
            img = Image.open(BytesIO(response.content))
            
            # Convert to RGB if necessary (e.g., RGBA or P to RGB for standard WebP compression)
            if img.mode == "RGBA" or img.mode == "P":
                # Use a white background for alpha transparency if converting to RGB
                bg = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "RGBA":
                    bg.paste(img, mask=img.split()[3])
                else:
                    bg.paste(img)
                img = bg
            
            # Save as WebP
            img.save(out_path, format="WebP", quality=80, method=6)
            
            # Store for batch replacement
            url_map[url] = local_url
            
        except Exception as e:
            print(f"❌ Error processing {url}: {e}")

    # Perform batch replacement in component files
    print("\n📝 Updating component files...")
    for tsx_path in component_files:
        if os.path.exists(tsx_path):
            try:
                with open(tsx_path, 'r', encoding='utf-8') as f:
                    content: str = f.read()
                
                replaced: list[str] = []

                for remote_url, local_url in url_map.items():
                    if str.find(content, remote_url) != -1:
                        content = str.replace(content, remote_url, local_url)
                        replaced.append(remote_url)

                if replaced:
                    with open(tsx_path, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✨ Updated {os.path.basename(tsx_path)}: {len(replaced)} replacements made.")
                else:
                    print(f"ℹ️ No replacements needed in {os.path.basename(tsx_path)}.")
                    
            except Exception as e:
                print(f"❌ Error updating {tsx_path}: {e}")

    print("\n🚀 All tasks completed successfully.")

if __name__ == "__main__":
    main()


import asyncio
import hashlib
import re
from pathlib import Path
from urllib.parse import urlparse, unquote

from playwright.async_api import async_playwright
from bs4 import BeautifulSoup


WEBSITE_URL = "https://truth.coffee/"
OUTPUT_DIR = Path("truth-coffee-local")
ASSET_DIR = OUTPUT_DIR / "assets"

# Store downloaded resources here
downloaded_files = {}


def get_local_path(url):
    """Convert a website URL into a local file path."""

    parsed = urlparse(url)

    host = parsed.netloc.replace(":", "_")
    url_path = unquote(parsed.path).lstrip("/")

    if not url_path or url_path.endswith("/"):
        url_path += "index"

    path = Path(url_path)

    # Avoid collisions for URLs with query parameters
    if parsed.query:
        query_hash = hashlib.md5(
            parsed.query.encode()
        ).hexdigest()[:8]

        path = path.with_name(
            f"{path.stem}_{query_hash}{path.suffix}"
        )

    if not path.suffix:
        path = path.with_suffix(".bin")

    return ASSET_DIR / host / path


async def main():

    OUTPUT_DIR.mkdir(exist_ok=True)
    ASSET_DIR.mkdir(exist_ok=True)

    async with async_playwright() as p:

        browser = await p.chromium.launch(
            headless=True
        )

        page = await browser.new_page(
            viewport={
                "width": 1440,
                "height": 1000
            },
            device_scale_factor=1
        )

        print("Opening website...")

        # Capture CSS, JS, images, fonts and other responses
        async def capture_response(response):

            try:
                if not response.ok:
                    return

                url = response.url
                content_type = response.headers.get(
                    "content-type", ""
                )

                # Skip documents and non-frontend resources
                if "text/html" in content_type:
                    return

                # Avoid saving very large files
                body = await response.body()

                if len(body) > 30 * 1024 * 1024:
                    return

                local_path = get_local_path(url)

                downloaded_files[url] = local_path

                local_path.parent.mkdir(
                    parents=True,
                    exist_ok=True
                )

                local_path.write_bytes(body)

                print("Downloaded:", url)

            except Exception as error:
                print("Resource error:", error)

        page.on(
            "response",
            lambda response: asyncio.create_task(
                capture_response(response)
            )
        )

        await page.goto(
            WEBSITE_URL,
            wait_until="domcontentloaded",
            timeout=120000
        )

        # Allow JavaScript and dynamic content to load
        try:
            await page.wait_for_load_state(
                "networkidle",
                timeout=30000
            )
        except Exception:
            print("Network still active. Continuing...")

        # Scroll to load lazy-loaded images
        await page.evaluate("""
            async () => {
                await new Promise(resolve => {
                    let position = 0;

                    const distance = 500;

                    const timer = setInterval(() => {
                        window.scrollBy(0, distance);

                        position += distance;

                        if (
                            position >=
                            document.body.scrollHeight
                        ) {
                            clearInterval(timer);

                            window.scrollTo(0, 0);

                            resolve();
                        }
                    }, 250);
                });
            }
        """)

        await page.wait_for_timeout(5000)

        # Wait for pending response downloads
        await page.wait_for_timeout(3000)

        print("Extracting frontend HTML...")

        html = await page.content()

        await browser.close()

    # Parse rendered HTML
    soup = BeautifulSoup(html, "html.parser")

    # Replace downloaded absolute resource URLs with local paths
    for tag in soup.find_all(True):

        for attribute in [
            "src",
            "href",
            "poster"
        ]:

            value = tag.get(attribute)

            if not value:
                continue

            if value in downloaded_files:

                local_path = downloaded_files[value]

                relative_path = Path(
                    "assets"
                ) / local_path.relative_to(ASSET_DIR)

                tag[attribute] = relative_path.as_posix()

        # Handle srcset image collections
        srcset = tag.get("srcset")

        if srcset:

            updated_sources = []

            for item in srcset.split(","):

                parts = item.strip().split()

                if not parts:
                    continue

                image_url = parts[0]

                if image_url in downloaded_files:

                    local_path = downloaded_files[image_url]

                    relative_path = (
                        Path("assets") /
                        local_path.relative_to(ASSET_DIR)
                    )

                    parts[0] = relative_path.as_posix()

                updated_sources.append(" ".join(parts))

            tag["srcset"] = ", ".join(updated_sources)

    # Save the frontend
    index_file = OUTPUT_DIR / "index.html"

    index_file.write_text(
        str(soup),
        encoding="utf-8"
    )

    print("\n--------------------------------")
    print("SCRAPING COMPLETED!")
    print("--------------------------------")

    print("HTML:", index_file)
    print("Assets downloaded:", len(downloaded_files))
    print("Output folder:", OUTPUT_DIR.resolve())

    print("\nOpen index.html using VS Code Live Server.")


if __name__ == "__main__":
    asyncio.run(main())

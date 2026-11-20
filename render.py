import asyncio
from pathlib import Path

from playwright.async_api import async_playwright

ROOT = Path(__file__).resolve().parent


async def main():
    async with async_playwright() as playwright:
        browser = await playwright.chromium.launch(args=["--no-sandbox"])
        page = await browser.new_page(viewport={"width": 1024, "height": 1024})
        await page.goto((ROOT / "news.html").as_uri())
        # Wait for web fonts so the screenshot captures the intended typography.
        await page.evaluate("document.fonts.ready")
        await page.screenshot(path=ROOT / "entry.png")
        await browser.close()


if __name__ == "__main__":
    asyncio.run(main())

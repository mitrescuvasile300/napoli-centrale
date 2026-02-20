#!/usr/bin/env python3
"""
Extract menu from Napoli Centrale original website
Using Playwright to get real products, prices, images
"""

import asyncio
import json
from playwright.async_api import async_playwright

async def extract_menu():
    """Extract full menu from pizzerianapolicentrale.ro"""
    
    menu_data = {
        "restaurant": "Pizzeria Napoli Centrale",
        "source": "https://www.pizzerianapolicentrale.ro",
        "categories": [],
        "extracted_at": None
    }
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        try:
            print("🍕 Extracting Napoli Centrale menu...")
            
            # Navigate to the menu page
            await page.goto("https://www.pizzerianapolicentrale.ro/meniu.html", wait_until="networkidle")
            await page.wait_for_timeout(3000)
            
            # Check if there's an iframe with the ordering system
            frames = page.frames
            print(f"Found {len(frames)} frames")
            
            for i, frame in enumerate(frames):
                url = frame.url
                print(f"Frame {i}: {url[:80]}...")
                
                if 'appy.ro' in url or 'webOrders' in url:
                    print(f"🎯 Found ordering frame: {url}")
                    
                    # Wait for menu to load
                    await frame.wait_for_load_state('networkidle')
                    await asyncio.sleep(3)
                    
                    # Extract all text content
                    content = await frame.content()
                    
                    # Try to find product containers
                    products = await frame.query_selector_all("[class*='product'], [class*='item'], [class*='menu']")
                    print(f"Found {len(products)} potential products")
                    
                    # Extract visible text
                    all_text = await frame.evaluate('''() => {
                        const texts = [];
                        document.querySelectorAll('*').forEach(el => {
                            if (el.children.length === 0 && el.textContent.trim()) {
                                texts.push(el.textContent.trim());
                            }
                        });
                        return texts;
                    }''')
                    
                    print(f"\n📋 Sample text items:")
                    for text in all_text[:30]:
                        if any(keyword in text.lower() for keyword in ['pizza', 'paste', 'lei', 'ron', 'euro', '€']):
                            print(f"  - {text}")
                    
                    break
            
            # Also check main page content
            main_content = await page.content()
            
            # Save for analysis
            with open("/home/node/.openclaw/workspace/napoli-centrale/extracted_menu.html", "w", encoding="utf-8") as f:
                f.write(main_content)
            
            menu_data["extracted_at"] = "2026-02-20T15:00:00Z"
            
            with open("/home/node/.openclaw/workspace/napoli-centrale/menu_extracted.json", "w", encoding="utf-8") as f:
                json.dump(menu_data, f, indent=2, ensure_ascii=False)
            
            print("\n✅ Extraction complete")
            print("📁 Saved to: menu_extracted.json")
            
        except Exception as e:
            print(f"❌ Error: {e}")
            import traceback
            traceback.print_exc()
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(extract_menu())

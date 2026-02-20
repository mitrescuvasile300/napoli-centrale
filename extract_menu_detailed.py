#!/usr/bin/env python3
"""
Advanced menu extraction from Napoli Centrale
Uses Playwright to capture all API calls and extract product data
"""

import asyncio
import json
import re
from playwright.async_api import async_playwright

async def extract_full_menu():
    """Extract complete menu with prices from appy.ro"""
    
    all_data = {
        "restaurant": "Pizzeria Napoli Centrale",
        "categories": []
    }
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context()
        page = await context.new_page()
        
        # Store all API responses
        api_calls = []
        
        async def handle_response(response):
            url = response.url
            if 'appy.ro' in url:
                try:
                    body = await response.text()
                    if len(body) > 100:
                        api_calls.append({'url': url, 'body': body[:5000]})
                except:
                    pass
        
        page.on("response", handle_response)
        
        try:
            print("🍕 Loading Napoli Centrale ordering system...")
            
            await page.goto("https://apps.appy.ro/webOrders/#shop/NapoliCentrale/ln/ro/pm/0/?type=Delivery", 
                          wait_until="networkidle")
            
            # Wait for all API calls
            await asyncio.sleep(5)
            
            # Click on categories to load products
            print("🖱️ Exploring categories...")
            
            # Get all clickable elements
            elements = await page.query_selector_all('div, button, span, a')
            
            for el in elements[:30]:
                try:
                    text = await el.inner_text()
                    if text and any(cat in text.lower() for cat in ['pizza', 'paste', 'salata', 'desert', 'bauturi', 'menu']):
                        print(f"  Clicking: {text[:50]}")
                        await el.click()
                        await asyncio.sleep(2)
                except:
                    continue
            
            await asyncio.sleep(3)
            
            # Try to extract product data from page
            products_data = await page.evaluate('''() => {
                const data = {
                    texts: [],
                    products: []
                };
                
                // Get all text
                document.querySelectorAll('*').forEach(el => {
                    if (el.children.length === 0) {
                        const text = el.textContent.trim();
                        if (text && text.length < 200) {
                            data.texts.push(text);
                        }
                    }
                });
                
                return data;
            }''')
            
            # Filter for product-like items (contain prices or food keywords)
            product_candidates = []
            for text in products_data['texts']:
                text_lower = text.lower()
                # Look for prices (numbers followed by lei/ron)
                if re.search(r'\d+[.,]?\d*\s*(lei|ron|\$|€)', text_lower):
                    product_candidates.append(text)
                # Or food keywords with capitalized words
                elif any(kw in text_lower for kw in ['pizza', 'paste', 'salata', 'carbonara', 'margherita']):
                    if len(text) > 3 and text[0].isupper():
                        product_candidates.append(text)
            
            print(f"\n📋 Found {len(product_candidates)} product candidates:")
            for prod in product_candidates[:20]:
                print(f"  - {prod}")
            
            # Save results
            all_data['raw_products'] = product_candidates
            all_data['api_calls'] = len(api_calls)
            all_data['extracted_at'] = "2026-02-20T15:10:00Z"
            
            with open("/home/node/.openclaw/workspace/napoli-centrale/menu_detailed.json", "w", encoding="utf-8") as f:
                json.dump(all_data, f, indent=2, ensure_ascii=False)
            
            print("\n✅ Detailed extraction saved to: menu_detailed.json")
            
        except Exception as e:
            print(f"❌ Error: {e}")
            import traceback
            traceback.print_exc()
        finally:
            await browser.close()

if __name__ == "__main__":
    asyncio.run(extract_full_menu())

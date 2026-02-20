import asyncio, json, re
from playwright.async_api import async_playwright

async def main():
    out=[]
    async with async_playwright() as p:
        browser=await p.chromium.launch(headless=True)
        context=await browser.new_context()
        page=await context.new_page()

        async def on_response(resp):
            try:
                ct=(resp.headers.get('content-type') or '').lower()
                if any(k in ct for k in ['json','javascript','text/plain','html']):
                    txt=await resp.text()
                    if any(k in txt for k in ['RON','Price','price','lei','Margherita','Pizza']) and len(txt)>50:
                        out.append({'url':resp.url,'ct':ct,'sample':txt[:2000]})
            except Exception:
                pass

        page.on('response', on_response)
        await page.goto('https://apps.appy.ro/webOrders/#shop/NapoliCentrale/ln/ro/l/23891750/g/0/pm/0?type=Delivery&t=rll&l=23891750', wait_until='networkidle')
        await page.wait_for_timeout(3000)

        # click first few categories
        refs=await page.query_selector_all('.module-selector,.category-element')
        for i,el in enumerate(refs[:8]):
            try:
                txt=(await el.inner_text())[:60]
                await el.click()
                await page.wait_for_timeout(1200)
            except Exception:
                pass

        await page.wait_for_timeout(2000)
        await browser.close()

    # de-dup by url+sample
    seen=set(); clean=[]
    for x in out:
        k=(x['url'],x['sample'][:120])
        if k in seen: continue
        seen.add(k); clean.append(x)
    with open('/home/node/.openclaw/workspace/napoli-centrale/fresh5003/network_hits.json','w',encoding='utf-8') as f:
        json.dump(clean,f,ensure_ascii=False,indent=2)
    print('saved',len(clean))

asyncio.run(main())

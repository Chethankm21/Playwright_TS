const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://practice.sdetunicorns.com/cart/');
  await page.getByRole('link', { name: 'Return to shop' }).click();
  await page.getByRole('heading', { name: 'Shop' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();
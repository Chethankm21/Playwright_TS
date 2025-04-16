import {test, expect,Page} from '@playwright/test'

test("Mouse Hover", async({page})=>{
    await page.goto("https://www.spicejet.com/");
    await page.getByText('Add-ons').first().hover();
    await page.waitForTimeout(9000);

})
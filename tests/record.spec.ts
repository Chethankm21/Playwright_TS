import {expect,test} from 'playwright/test'
const path = require('path');

test('upload file', async({page})=>{
//open the cart page URL
await page.goto('https://practice.sdetunicorns.com/cart/');
await page.pause();

})
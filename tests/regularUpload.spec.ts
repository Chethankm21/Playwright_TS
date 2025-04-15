import {expect,test} from 'playwright/test'
const path = require('path');
import CartPage from '../pages/cart.page';

let cartpage : CartPage;

test('upload file', async({page})=>{
//open the cart page URL

cartpage = new CartPage(page);
await page.goto('https://practice.sdetunicorns.com/cart/');

//set the file path
const filepath = path.join(__dirname, '../data/test.pdf');

//upload the file
await cartpage.uploadComponent().uploadFile(filepath);

//Assertion for success message
await expect(cartpage.uploadComponent().successText).toContainText("uploaded successfully");
})
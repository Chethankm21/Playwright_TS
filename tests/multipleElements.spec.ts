import {test,expect} from 'playwright/test'

test('getting multiple elements and print it', async ({page})=>{

   //open the URL in the browser 
   await page.goto("https://practice.sdetunicorns.com/");

   const navElements = page.locator('#zak-primary-menu li[id*=menu]');

   for(let el of await navElements.elementHandles()){
    console.log(await el.textContent());
   }

})
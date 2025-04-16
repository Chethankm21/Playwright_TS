import {Browser, Page, test} from '@playwright/test'
import { channel } from 'diagnostics_channel';

test('Drag and drop ' , async({page})=>{

    await page.goto('https://jqueryui.com/droppable/');
    
    //await page.waitForTimeout(3000);

    //Single line
   // await page.locator('#draggable').first().dragTo(page.locator('#droppable').first());

   //step by step
   await page.locator('#draggable').first().hover();
   await page.mouse.down();
   await page.locator('#droppable').first().hover();
   await page.mouse.up();

   await page.waitForTimeout(5000);


})
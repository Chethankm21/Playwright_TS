import { test, expect } from '@playwright/test';
import HomePage from '../pages/home.page';

let homepage;

test.describe('Home', () => {
  test('Home page title validation', async ({ page }) => {
    // Open the URL
    await page.goto('https://practice.sdetunicorns.com/');

    // Verifying the page title
    await expect(page).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
  });

  test('Click on get started button', async({page})=>{
    
  homepage = new HomePage(page);
    //open the URL
    await page.goto('https://practice.sdetunicorns.com');

    //click on Get started button
    //await page.locator('#get-started').click();
    await homepage.getStarted.click();


    //verify the URL
    await expect(page).toHaveURL('https://practice.sdetunicorns.com/#get-started');


  })

  test('Check for Home text avalability', async({page})=>{

    //open the URL
    await page.goto('https://practice.sdetunicorns.com');

    //get the Home text
    const homeText = page.locator('#zak-primary-menu >> text=Home');
    

    //verify the URL
    await expect(homeText).toBeEnabled();


  })
});

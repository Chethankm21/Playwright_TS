import {test , expect, Locator, APIRequestContext, APIResponse} from 'playwright/test'



let fakerAPI:APIRequestContext;
let randomPerson:APIResponse;

test.beforeAll(async({playwright})=>{
        fakerAPI = await playwright.request.newContext({
        baseURL: "https://jsonplaceholder.typicode.com/"
    })
    const response = await fakerAPI.get('users');
    const responseBody = await response.json();
    randomPerson = responseBody[0];
    console.log(responseBody[0]);

})

test('Fill the contact form',async ({page}) =>{

    //Open the URL
    await page.goto('https://practice.sdetunicorns.com/');

    //Click on contact button
    const contactButton:Locator = page.locator("ul#zak-primary-menu li[id*='menu']").nth(4);
    await contactButton.click();

    //Verify the URL contains contact or not
    expect(page).toHaveURL("https://practice.sdetunicorns.com/contact/");

    //go to the contact form and fill the details
    const name:Locator=page.locator('input#evf-277-field_ys0GeZISRs-1');
    const email:Locator = page.locator('input#evf-277-field_LbH5NxasXM-2');
    const phone:Locator = page.locator('input#evf-277-field_66FR384cge-3');
    const message: Locator = page.locator('#evf-277-field_yhGx3FOwr2-4');
    
    await name.fill(randomPerson['name']);
    await email.fill(randomPerson['email']);
    await phone.fill(randomPerson['phone']);
    await message.fill("Playwright AUtomation Testing.................");


    //click on submit button
    const submit:Locator=page.locator("button[type='submit']");
    await submit.click();

    //Verify thank you message
    let thankText:String = "Thanks for contacting us! We will be in touch with you shortly";
    const textVisible:Boolean = await page.locator("div.everest-forms-notice--success").isVisible();
    console.log(await page.locator("div.everest-forms-notice--success").textContent());

    if (textVisible) {
        
        expect(true).toBeTruthy(); 
      } else {
        
        throw new Error('Expected text was not found on the page.');
    
      }

      expect("test").toEqual("test");


})
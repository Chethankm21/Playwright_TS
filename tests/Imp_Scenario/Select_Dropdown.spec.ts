import{test, expect} from '@playwright/test'

test('select dropdown', async({page})=>{
 
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PHPM');

    let dropdown = "select#Contact_CountryCode";

    //await page.selectOption(dropdown, {value:'IN'});

    

    const allOptions = await page.$$(dropdown+'> option');

    for(let e of allOptions){
        let text = await e.textContent();
        //console.log(text);
        if(text === 'India'){
            await page.selectOption(dropdown, {label : text});
            break;
        }
    }

    await page.waitForTimeout(10000);

})
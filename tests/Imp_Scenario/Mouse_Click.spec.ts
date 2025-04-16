import{Browser, Page, test} from '@playwright/test'
import { channel } from 'diagnostics_channel';

test('Mouse click ' , async({page})=>{

    // const browser:Browser = chromium.launch({headless:'false', channel:'chrome'});
    // const page:Page = await browser.newPage();

    await page.goto('https://demo.guru99.com/test/simple_context_menu.html');

    //double click on element
    await page.getByText('Double-Click Me To See Alert').dblclick();
    await page.waitForTimeout(3000);

    //right click or Context click
    await page.getByText('right click me').click({button:'right'});
    await page.waitForTimeout(3000);

    //shifting content

    await page.goto('https://the-internet.herokuapp.com/shifting_content');
    await page.getByText('Example 1: Menu Element').click({modifiers:["Shift"]});

    await page.waitForTimeout(3000);



    //browser.close();

})

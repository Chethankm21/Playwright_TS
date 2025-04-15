import {expect , test} from 'playwright/test'
import HomePage from '../pages/home.page'

let homepage;

test('POM page object model 1', async({page})=>{

    page.goto('test.com');
    homepage=new HomePage(page);

})
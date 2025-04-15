import{Page, Locator} from 'playwright/test'
import uploadComponent from './component/upload.component';

class CartPage{

    page:Page;

    constructor(page:Page){
        this.page=page
    }
    
 uploadComponent(){
    return new uploadComponent(this.page);
 }

}

export default CartPage;
import {Page, Locator} from '@playwright/test'

class UploadComponent{

    page:Page;
    submitButton: Locator;
    successText: Locator;
    uploadInput: string;

    constructor(page:Page){
        this.page=page;
        this.submitButton= page.locator("#upload_1");
        this.successText = page.locator("#wfu_messageblock_header_1_label_1");
        this.uploadInput = '#upfile_1';

    }

    async uploadFile(filepath:string){
        await this.page.setInputFiles(this.uploadInput, filepath);
        await this.submitButton.click();
    }

}

export default UploadComponent;
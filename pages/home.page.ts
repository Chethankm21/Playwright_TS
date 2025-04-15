class HomePage{

page:any;
getStarted: any;

constructor(page){
    this.page=page;
    this.getStarted = page.locator('#get-started');
}

}

export default HomePage

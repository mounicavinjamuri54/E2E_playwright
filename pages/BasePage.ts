import {Page, Locator} from '@playwright/test';

export class BasePage{

 protected page : Page; //tries to assign a type/name, not an instance

 constructor(page: Page){

    this.page = page;
 }
 ////Navigate

 async navigate(url: String)
 {
   console.log(`Navigating to ${url}`);
   await this.page.goto("/elements");
   await this.page.waitForLoadState('networkidle');
 }

 async click(locator: Locator){
   await locator.click()

 }

 async fill(locator:Locator , value: String)
 {
await locator.fill('value');

 }

 async textContent(locator:Locator): Promise<string | null>
 {

   return await locator.textContent();
 }


}
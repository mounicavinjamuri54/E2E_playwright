import {Page} from '@playwright/test';

export class BasePage{

 protected page : Page; //tries to assign a type/name, not an instance

 constructor(page: Page){

    this.page = page;
 }

}
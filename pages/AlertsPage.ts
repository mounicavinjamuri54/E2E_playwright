import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AlertPage extends BasePage{  ////export(Keyword) :-Now other files can use it 
    // export is a TypeScript/JavaScript keyword used to make a class, function, or variable available to other files..

   // constructor(private page: Page) { } calls this in BasePage

    //constructor runs automatically when object got created :-when ---> const alertsPage = new AlertsPage(page);
    //Playwright passes the browser tab(page):---into the constructor.
    // Now every method in the class can use:-----this.page
    //why private:----Because only this class should access the page object can make it as protected also can use child class(inherit concept)).
    //Without private, we must explicitly declare the variable and assign it inside the constructor to keep obj private

    async navigateToAlerts() {

        await this.page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await this.page.getByRole('link', { name: 'Alerts', exact: true }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
        await expect(this.page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
        await expect(this.page.getByText('Click Button to see alert ')).toBeVisible();

    }

    async simpleAlertClick() {
        this.page.once('dialog', async dialog => {

            console.log(`Dialog type:', ${dialog.type()}`);
            console.log(`Dialog message:, ${dialog.message()}`);
            dialog.accept();
        });        await this.page.locator('#alertButton').click();
    }

}

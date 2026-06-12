import { test, expect } from '@playwright/test';
import { AlertPage } from '../pages/AlertsPage';//pom

test.describe('Demoqa_topics_day3', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/elements');
    });


    test('Simple Alert , @alertspom', async ({ page }) => {
        const alertspage = new AlertPage(page);//pom

        await alertspage.navigateToAlerts(); //pom
        await alertspage.simpleAlertClick();//pom
        
            
        //////approach1===============================================currently not working
        // const [dialog] = await Promise.all([
        //     page.waitForEvent('dialog'),
        //     page.locator('#alertButton').click()
        // ]);
        // console.log(dialog.message());
        // await dialog.accept();

        //////////approach 2
 });

});

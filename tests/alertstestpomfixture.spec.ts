//import { test, expect } from '@playwright/test';
import { AlertPage } from '../pages/AlertsPage';//pom
import { test } from '../fixtures/baseFixture'

test.describe('alertstestpomfixture', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/elements');
    });


    test('Simple Alertfixture , @alertspomfixture', async ({ alertpage }) => {
        //const alertspage = new AlertPage(page);//pom ---->NO NEED TO CALL EVERY TIME --reduce recalling every time

        await alertpage.navigateToAlerts(); //alertpage--->ownfixture created in basefIXTURE
        await alertpage.simpleAlertClick();//alertpage--->ownfixture
  
 });

});

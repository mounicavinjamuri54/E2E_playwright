import { test, expect } from '@playwright/test';

test.describe('Demoqa_topics_day3', () => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/elements');
    });
    ///////////ALERTS
    // //simple, confirm, prompt
    /************notes */
    //page-->current browser tab, once-->listerner only one time,
    //araysyn function(dialog)=>{}--->callback function
    //1)page.once('dialog', async dialog=>{})--Register the listner
   // 2)Alert opens 3)Playwright automatically executes  4)Alert closes
   //once()--handles only 1st dialog
   //on()--->handles every dialog

   //What is page.once('dialog', async dialog => {})?

//It registers a one-time event listener for a browser dialog. 
// When an alert, confirm, or prompt appears, Playwright passes the dialog object to the callback function, 
// where we can inspect the dialog message and either accept or dismiss it.

    test('Alerts , @alerts2', async ({ page }) => {

        // page.on('close', () => {
        //     console.log('PAGE CLOSED');
        // });

        // page.context().on('close', () => {
        //     console.log('CONTEXT CLOSED');
        // });

        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByRole('link', { name: 'Alerts', exact: true }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
        await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
        //////approach1===============================================currently not working
        // const [dialog] = await Promise.all([
        //     page.waitForEvent('dialog'),
        //     page.locator('#alertButton').click()
        // ]);
        // await dialog.accept();

        //////////approach 2
        await expect(page.getByText('Click Button to see alert ')).toBeVisible();
        page.once('dialog', async dialog => {

            console.log(`Dialog type:', ${dialog.type()}`);
            console.log(`Dialog message:, ${dialog.message()}`);
            dialog.accept();
        });
        await page.locator('#alertButton').click();
    });

    test('timerAlert, @timeralert', async ({ page }) => {

        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByRole('link', { name: 'Alerts', exact: true }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
        await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
        await expect(page.getByText('On button click, alert will appear after 5 seconds')).toBeVisible();
        
        page.once('dialog', async (dialog) => {

            console.log(`Dialog type:, ${dialog.type()}`);
            console.log(`dialog message:, ${dialog.message()}`);
            await dialog.accept()
        });
        await page.locator('#timerAlertButton').click();

    });

    test('confirmalert, @confirmalert', async ({ page }) => {
        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByRole('link', { name: 'Alerts', exact: true }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
        await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
        await expect(page.getByText('On button click, confirm box will appear')).toBeVisible();
        page.once('dialog', async dialog => {

            console.log(`Dialog type:, ${dialog.type()}`);
            console.log(`Dialog message:,${dialog.message()}`);
            await dialog.dismiss();
        });
        await page.locator('#confirmButton').click();
    });

    test('promptAlert , @promptalert', async ({ page }) => {
        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByRole('link', { name: 'Alerts', exact: true }).click();
        // await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
        await expect(page.getByRole('heading', { name: 'Alerts' })).toBeVisible();

        page.once('dialog', async dialog => {

            console.log(`Dialog message: ${dialog.message()}`);
            console.log(`Dialog type: ${dialog.type()}`);

            await dialog.accept('Mounica');
        });

        await page.locator('#promtButton').click();
    });

});

import { test, expect } from '@playwright/test';

test.describe(() => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/elements');
    });

    test('frames, @frames', async ({ page }) => {

        //How do you switch back to the parent frame in Playwright?

        //Playwright does not require explicit frame switching like Selenium. 
        // We interact with frames using frameLocator(). To access a parent frame or the main page, 
        // we simply use the appropriate frameLocator() or page.locator() without calling parentFrame() or defaultContent().
        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByText('Frames', { exact: true }).click();
        await page.frameLocator('#frame1').locator('#sampleHeading').textContent();
        const frame2 = await page.frameLocator('#frame2').locator('#sampleHeading').textContent();
        expect(frame2).toBe('This is a sample page');

    });

    test('nestedFrames, @nestedframes', async ({ page }) => {

        await page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await page.getByText('Nested Frames', { exact: true }).click();

        await page.frameLocator('#frame1').frameLocator('iframe').locator('body').textContent();
        //parent frame again
        await page.frameLocator('#frame1').locator('body').textContent();
        await page.locator('h1').click();

    })

});
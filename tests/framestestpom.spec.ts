import { test, expect } from '@playwright/test';
import { FramesPage } from '../pages/pages/FramesPage';

test.describe(() => {

    test.beforeEach(async ({ page }) => {

        await page.goto('/elements');
    });

    test('frames, @framespom', async ({ page }) => {

        const framespage = new FramesPage(page);

        //How do you switch back to the parent frame in Playwright?

        //Playwright does not require explicit frame switching like Selenium. 
        // We interact with frames using frameLocator(). To access a parent frame or the main page, 
        // we simply use the appropriate frameLocator() or page.locator() without calling parentFrame() or defaultContent().
        await framespage.navigateToFrames();
        await framespage.framesclick();


    });

    test('nestedFramespom, @nestedframespom', async ({ page }) => {

        const framespage = new FramesPage(page);

        await framespage.navigateToFrames();
        await framespage.nestedframesclick();



    })

});
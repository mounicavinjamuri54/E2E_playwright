import { Page, expect } from '@playwright/test';

export class FramesPage {

    constructor(private page: Page) { }


    async navigateToFrames(){

        await this.page.getByText('Alerts, Frame & Windows', { exact: true }).click();
        await this.page.getByText('Frames', { exact: true }).click();
    }

    async framesclick() {
        await this.page.frameLocator('#frame1').locator('#sampleHeading').textContent();
        const frame2 = await this.page.frameLocator('#frame2').locator('#sampleHeading').textContent();
        expect(frame2).toBe('This is a sample page');

    }

    async nestedframesclick() {
        await this.page.frameLocator('#frame1').frameLocator('iframe').locator('body').textContent();
        //parent frame again
        await this.page.frameLocator('#frame1').locator('body').textContent();
        await this.page.locator('h1').click();

    }



}
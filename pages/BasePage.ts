import { Page, Locator } from '@playwright/test';

export class BasePage {

  protected page: Page; //tries to assign a type/name, not an instance

  constructor(page: Page) {

    this.page = page;
  }
  ////Navigate

  async navigate(url: string) {
    console.log(`Navigating to ${url}`);
    await this.page.goto("/elements");
    await this.page.waitForLoadState('networkidle');
  }

  async click(locator: Locator) {
    await locator.click()

  }

  async fill(locator: Locator, value: string) {
    await locator.fill(value);

  }

  async textContent(locator: Locator): Promise<string | null> {

    return locator.textContent();
  }

  async isVisible(locator: Locator): Promise<boolean> {
    return locator.isVisible();
  }

  async Screenshot(filename: string) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    this.page.screenshot({
      path: `D:/Playwright/PWDemos/screenshots/${filename}_${timestamp}.png`,
      fullPage: true
    });

  }
}
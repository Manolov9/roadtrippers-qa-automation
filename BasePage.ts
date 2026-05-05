import { Page, Locator } from '@playwright/test';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(path: string = '/') {
    await this.page.goto(path);
  }

  async acceptCookies() {
    const acceptBtn = this.page.locator('#onetrust-accept-btn-handler');
    try {
      await acceptBtn.waitFor({ state: 'visible', timeout: 5000 });
      await acceptBtn.click({ force: true });
    } catch (e) {
      console.log('Cookie banner not found or already dismissed');
    }
  }

  async removeOverlays() {
    await this.page.evaluate(() => {
      const selectors = ['#gist-overlay', '#gist-embed-message', '.onetrust-pc-dark-filter', '#onetrust-banner-sdk'];
      selectors.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) (el as HTMLElement).style.display = 'none';
      });
    });
  }
}

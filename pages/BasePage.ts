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
    // Wait a bit for overlays to appear
    await this.page.waitForTimeout(2000);
    await this.page.evaluate(() => {
      const selectors = [
        '#gist-overlay', 
        '#gist-embed-message', 
        '.onetrust-pc-dark-filter', 
        '#onetrust-banner-sdk',
        '.gist-message',
        '.gist-background'
      ];
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          (el as HTMLElement).style.display = 'none';
          (el as HTMLElement).style.visibility = 'hidden';
          (el as HTMLElement).style.pointerEvents = 'none';
        });
      });
    });
  }
}

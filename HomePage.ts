import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  readonly startTripButton: Locator;

  constructor(page: Page) {
    super(page);
    this.startTripButton = page.getByRole('button', { name: 'Start Trip' });
  }

  async clickStartTrip() {
    await this.startTripButton.click({ force: true });
  }
}

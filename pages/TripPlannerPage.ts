import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TripPlannerPage extends BasePage {
  readonly originInput: Locator;
  readonly destinationInput: Locator;
  readonly createTripButton: Locator;

  constructor(page: Page) {
    super(page);
    this.originInput = page.locator('#origin');
    this.destinationInput = page.locator('#destination');
    this.createTripButton = page.getByRole('button', { name: 'Create trip' });
  }

  async setOrigin(origin: string) {
    await this.originInput.waitFor({ state: 'visible' });
    await this.originInput.click({ force: true });
    await this.originInput.fill('');
    await this.originInput.type(origin, { delay: 150 });
    await this.page.waitForTimeout(4000);
    
    const suggestion = this.page.locator('.autocomplete_item, [class*="autocomplete"], .suggestion, .rt-autocomplete-list-item-view').first();
    if (await suggestion.isVisible()) {
      await suggestion.click({ force: true });
    } else {
      await this.page.keyboard.press('ArrowDown');
      await this.page.waitForTimeout(500);
      await this.page.keyboard.press('Enter');
    }
    await this.page.waitForTimeout(2000);
  }

  async setDestination(destination: string) {
    await this.destinationInput.waitFor({ state: 'visible' });
    await this.destinationInput.click({ force: true });
    await this.destinationInput.fill('');
    await this.destinationInput.type(destination, { delay: 150 });
    await this.page.waitForTimeout(4000);
    
    const suggestion = this.page.locator('.autocomplete_item, [class*="autocomplete"], .suggestion, .rt-autocomplete-list-item-view').first();
    if (await suggestion.isVisible()) {
      await suggestion.click({ force: true });
    } else {
      await this.page.keyboard.press('ArrowDown');
      await this.page.waitForTimeout(500);
      await this.page.keyboard.press('Enter');
    }
    await this.page.waitForTimeout(2000);
  }

  async clickCreateTrip() {
    await this.createTripButton.click({ force: true });
  }
}

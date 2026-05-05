import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TripPlannerPage extends BasePage {
  readonly originInput: Locator;
  readonly destinationInput: Locator;
  readonly createTripButton: Locator;
  readonly suggestions: Locator;

  constructor(page: Page) {
    super(page);
    this.originInput = page.locator('#origin');
    this.destinationInput = page.locator('#destination');
    this.createTripButton = page.getByRole('button', { name: 'Create trip' });
    this.suggestions = page.locator('.rt-suggestion-item'); // This might need refinement based on actual DOM
  }

  async setOrigin(origin: string) {
    await this.originInput.waitFor({ state: 'visible' });
    await this.originInput.fill(origin);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);
  }

  async setDestination(destination: string) {
    await this.destinationInput.waitFor({ state: 'visible' });
    await this.destinationInput.fill(destination);
    await this.page.waitForTimeout(2000);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(1000);
  }

  async clickCreateTrip() {
    await this.createTripButton.click({ force: true });
  }
}

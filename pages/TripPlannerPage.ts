import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class TripPlannerPage extends BasePage {
  readonly originInput: Locator;
  readonly destinationInput: Locator;
  readonly createTripButton: Locator;
  readonly suggestions: Locator;

  constructor(page: Page) {
    super(page);
    // Updated based on browser inspection
    this.originInput = page.locator('.search_input_from');
    this.destinationInput = page.locator('.search_input_to');
    this.createTripButton = page.locator('.plan_trip_search_button');
    this.suggestions = page.locator('.autocomplete');
  }

  async setOrigin(origin: string) {
    await this.originInput.waitFor({ state: 'visible' });
    await this.originInput.fill(origin);
    await this.page.waitForTimeout(1500);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(500);
  }

  async setDestination(destination: string) {
    await this.destinationInput.waitFor({ state: 'visible' });
    await this.destinationInput.fill(destination);
    await this.page.waitForTimeout(1500);
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(500);
  }

  async clickCreateTrip() {
    await this.createTripButton.click({ force: true });
  }
}

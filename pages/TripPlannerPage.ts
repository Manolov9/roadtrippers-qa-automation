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

  private async fillLocation(input: Locator, value: string): Promise<void> {
    await input.waitFor({ state: 'visible', timeout: 15000 });
    await input.click({ force: true });
    await input.fill('');
    await input.type(value, { delay: 150 });
    await this.page.waitForTimeout(3000);

    // Try to find the suggestion list and click the first item
    const suggestion = this.page.locator('.rt-autocomplete-list-item-view, [class*="autocomplete-item"]').first();
    if (await suggestion.isVisible()) {
      await suggestion.click({ force: true });
    } else {
      // Fallback: use keyboard
      await this.page.keyboard.press('ArrowDown');
      await this.page.waitForTimeout(500);
      await this.page.keyboard.press('Enter');
    }
    
    await this.page.waitForTimeout(2000);
  }

  async setOrigin(origin: string): Promise<void> {
    await this.fillLocation(this.originInput, origin);
  }

  async setDestination(destination: string): Promise<void> {
    await this.fillLocation(this.destinationInput, destination);
  }

  async clickCreateTrip(): Promise<void> {
    await this.createTripButton.waitFor({ state: 'visible', timeout: 10000 });
    await this.createTripButton.click({ force: true });
  }
}

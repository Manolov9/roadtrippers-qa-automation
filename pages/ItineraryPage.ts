import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ItineraryPage extends BasePage {
  readonly launchTripButton: Locator;
  readonly tripTitle: Locator;
  readonly waypointList: Locator;

  constructor(page: Page) {
    super(page);
    this.launchTripButton = page.getByRole('button', { name: 'Launch trip' });
    this.tripTitle = page.locator('h1');
    this.waypointList = page.locator('.rt-waypoint-item'); // Adjust based on actual DOM
  }

  async clickLaunchTrip() {
    if (await this.launchTripButton.isVisible()) {
      await this.launchTripButton.click();
    }
  }

  async getTripName() {
    return await this.tripTitle.innerText();
  }
}

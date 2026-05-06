import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TripPlannerPage } from '../pages/TripPlannerPage';

test.describe('Roadtrippers Trip Planning Flow', () => {
  let homePage: HomePage;
  let tripPlannerPage: TripPlannerPage;

  test.beforeEach(async ({ page }) => {
    test.setTimeout(180000);
    homePage = new HomePage(page);
    tripPlannerPage = new TripPlannerPage(page);
    await homePage.navigate();
    await homePage.acceptCookies();
    await homePage.removeOverlays();
  });

  // TC-UI-01: Happy Path - create a trip with valid origin and destination
  test('Happy Path: Create a new trip', async ({ page }) => {
    await homePage.clickStartTrip();
    await expect(tripPlannerPage.originInput).toBeVisible();

    await tripPlannerPage.setOrigin('New York, NY');
    await tripPlannerPage.setDestination('Sofia, Bulgaria');
    await tripPlannerPage.clickCreateTrip();

    // Wait for any of the success indicators
    await expect(page).toHaveURL(/trip_id=|itinerary|onboarding|maps/, { timeout: 60000 });
  });

  // TC-UI-02: Edge Case - same origin and destination
  test('Edge Case: Same origin and destination', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('Sofia, Bulgaria');
    await tripPlannerPage.setDestination('Sofia, Bulgaria');
    await tripPlannerPage.clickCreateTrip();

    await expect(page).toHaveURL(/trip_id=|itinerary|onboarding|maps/, { timeout: 60000 });
  });

  // TC-UI-03: Negative Scenario - attempt to create trip with no destination
  test('Negative Scenario: Missing destination', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('Sofia, Bulgaria');
    
    // Clear destination and try to create
    await tripPlannerPage.destinationInput.fill('');
    await tripPlannerPage.clickCreateTrip();

    // Should stay on the same page (no trip_id in URL)
    await page.waitForTimeout(5000);
    expect(page.url()).not.toContain('trip_id=');
  });
});

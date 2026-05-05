import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TripPlannerPage } from '../pages/TripPlannerPage';
import { ItineraryPage } from '../pages/ItineraryPage';

test.describe('Roadtrippers Trip Planning Flow', () => {
  let homePage: HomePage;
  let tripPlannerPage: TripPlannerPage;
  let itineraryPage: ItineraryPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    tripPlannerPage = new TripPlannerPage(page);
    itineraryPage = new ItineraryPage(page);
    await homePage.navigate();
    await homePage.acceptCookies();
    await homePage.removeOverlays();
  });

  test('Happy Path: Create a new trip from New York to Los Angeles', async ({ page }) => {
    await homePage.clickStartTrip();
    
    await tripPlannerPage.setOrigin('New York, NY');
    await tripPlannerPage.setDestination('Los Angeles, CA');
    await tripPlannerPage.clickCreateTrip();

    await itineraryPage.clickLaunchTrip();
    
    // Verify trip was created (Checking URL or title)
    await expect(page).toHaveURL(/trip_id=|onboarding/);
  });

  test('Edge Case: Trip with same origin and destination', async ({ page }) => {
    await homePage.clickStartTrip();
    
    await tripPlannerPage.setOrigin('New York, NY');
    await tripPlannerPage.setDestination('New York, NY');
    await tripPlannerPage.clickCreateTrip();

    // In many apps, this might show a warning or just create a 0-mile trip
    // We'll verify it still proceeds or handles it gracefully
    await itineraryPage.clickLaunchTrip();
    await expect(page).toHaveURL(/trip_id=|onboarding/);
  });

  test('Negative Scenario: Attempt to create trip without destination', async ({ page }) => {
    await homePage.clickStartTrip();
    
    await tripPlannerPage.setOrigin('New York, NY');
    // Destination is left empty
    await tripPlannerPage.clickCreateTrip();

    // Verify validation error or that we stay on the same page
    // Assuming the button is disabled or an error message appears
    // For this site, it usually stays on the modal until valid input
    await expect(tripPlannerPage.createTripButton).toBeVisible();
    await expect(page).not.toHaveURL(/onboarding/);
  });
});

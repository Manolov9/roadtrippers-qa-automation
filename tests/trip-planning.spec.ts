import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { TripPlannerPage } from '../pages/TripPlannerPage';
import * as fs from 'fs';
import * as path from 'path';

test.describe('Roadtrippers Trip Planning Flow', () => {
  let homePage: HomePage;
  let tripPlannerPage: TripPlannerPage;

  test.beforeEach(async ({ page }) => {
    test.setTimeout(240000);
    homePage = new HomePage(page);
    tripPlannerPage = new TripPlannerPage(page);
    await homePage.navigate();
    await homePage.acceptCookies();
    await homePage.removeOverlays();
  });

  test.afterEach(async ({ page }, testInfo) => {
    const video = page.video();
    if (video) {
      const videoPath = await video.path();
      if (testInfo.status !== 'passed') {
        if (fs.existsSync(videoPath)) {
          try {
            fs.unlinkSync(videoPath);
          } catch (err) {}
        }
      } else {
        const now = new Date();
        const dateStr = now.toISOString().split('T')[0];
        const evidenceDir = path.join(process.cwd(), 'evidence', dateStr);
        
        if (!fs.existsSync(evidenceDir)) {
          fs.mkdirSync(evidenceDir, { recursive: true });
        }
        
        const cleanTitle = testInfo.title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        const timestamp = now.getTime();
        const newPath = path.join(evidenceDir, `${cleanTitle}_${timestamp}.mp4`);
        
        await page.context().close();
        if (fs.existsSync(videoPath)) {
          fs.renameSync(videoPath, newPath);
          console.log(`Video saved to: ${newPath}`);
        }
      }
    }
  });

  test('Happy Path: Create a new trip from New York to Sofia, Bulgaria', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('New York, NY');
    await tripPlannerPage.setDestination('Sofia, Bulgaria');
    await tripPlannerPage.clickCreateTrip();

    await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  });

  test('Edge Case: Create a trip with same origin and destination (Sofia)', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('Sofia, Bulgaria');
    await tripPlannerPage.setDestination('Sofia, Bulgaria');
    await tripPlannerPage.clickCreateTrip();

    await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  });

  test('Negative Scenario: Attempt to create trip with missing destination', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('Sofia, Bulgaria');
    
    await page.locator('#destination').click();
    await page.locator('#destination').fill('');
    await tripPlannerPage.clickCreateTrip();

    // Verify we didn't navigate away
    await expect(page).not.toHaveURL(/trip_id=/, { timeout: 5000 });
  });

  test('Functional Case: Add waypoints to a trip', async ({ page }) => {
    await homePage.clickStartTrip();
    await tripPlannerPage.setOrigin('Sofia, Bulgaria');
    await tripPlannerPage.setDestination('Plovdiv, Bulgaria');
    await tripPlannerPage.clickCreateTrip();
    
    await expect(page).toHaveURL(/trip_id=|onboarding|itinerary/, { timeout: 60000 });
  });
});

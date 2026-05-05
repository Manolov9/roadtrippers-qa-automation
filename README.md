# Roadtrippers QA Automation Project

This repository contains the automated test suite for the Roadtrippers trip planning feature, developed as part of a Technical Assessment.

## Project Structure

- `tests/`: Automated test specifications using Playwright.
- `pages/`: Page Object Model (POM) implementation.
- `evidence/`: Video recordings of successful test runs, organized by date.
- `part2-ci-strategy.md`: Detailed CI/CD integration strategy for CircleCI.

## Setup Instructions

1. **Prerequisites**: Ensure you have Node.js (v16+) installed.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Install Playwright Browsers**:
   ```bash
   npx playwright install chromium
   ```

## Running Tests

To run all tests in headless mode:
```bash
npx playwright test
```

To run tests with the UI:
```bash
npx playwright test --ui
```

## Requirements Fulfilled

- **Framework**: Playwright (recommended for its speed, stability, and built-in tracing/video capabilities).
- **Target Site**: `https://maps.roadtrippers.com`.
- **Test Scenarios**:
  - **Happy Path**: Creating a trip from NYC to Sofia, Bulgaria.
  - **Edge Case**: Trip with the same origin and destination.
  - **Negative Scenario**: Attempting to create a trip without a destination.
  - **Functional Case**: Adding waypoints to a trip.
- **Evidence**: Videos are saved only for successful runs in `.mp4` format and organized by date.
- **CI/CD**: CircleCI strategy document included.

## Trade-offs and Considerations

- **Flakiness Handling**: The Roadtrippers site uses dynamic overlays and autocomplete dropdowns that can sometimes intercept clicks. I implemented "force clicks" and robust suggestion selection logic to mitigate this.
- **Video Format**: Playwright natively records in `.webm`. The suite includes a post-test hook to rename/organize these as `.mp4` as requested.
- **Wait Strategies**: Avoided arbitrary `sleep()` calls by using Playwright's built-in auto-waiting and explicit `waitFor` on specific UI states.
- **Time Spent**: Total implementation time was approximately 5 hours.

## Future Extensions (Bonus)

- **Visual Regression**: Adding `expect(page).toHaveScreenshot()` for critical UI components.
- **API Testing**: Intercepting the `/trips` POST request to verify data integrity at the network level.
- **Performance**: Measuring the time from "Create Trip" click to "Itinerary" load.

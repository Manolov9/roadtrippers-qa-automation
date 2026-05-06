# Roadtrippers QA Automation Project

This repository contains the automated test suite for the Roadtrippers trip planning feature, developed as part of a Technical Assessment.

## Project Structure

- `tests/`: Automated test specifications using Playwright (UI and API).
- `pages/`: Page Object Model (POM) implementation.
- `test-results/`: Consolidated directory for all test artifacts, including screenshots and MP4 videos.
- `STRATEGY.md`: Detailed CI/CD integration strategy for CircleCI.
- `EXTENSIONS.md`: Information on implemented API tests and future recommendations.

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

To run all 6 tests (3 UI, 3 API) in headless mode:
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
  - **UI Happy Path**: Creating a trip from NYC to Los Angeles, CA.
  - **UI Edge Case**: Trip with the same origin and destination.
  - **UI Negative Scenario**: Attempting to create a trip without a destination.
  - **API Trip Creation**: Verifying the `POST /api/v2/trips` endpoint.
  - **API Trip Retrieval**: Verifying the `GET /api/v2/trips/{id}` endpoint.
  - **API Validation**: Verifying error handling for empty trip bodies.
- **Evidence**: All artifacts are saved in the `test-results` directory. Videos are converted to `.mp4` format.
- **CI/CD**: CircleCI strategy document included.

## Trade-offs and Considerations

- **Flakiness Handling**: The Roadtrippers site uses dynamic overlays and autocomplete dropdowns. I implemented robust suggestion selection logic and smart awaits to ensure stability.
- **Video Format**: Playwright natively records in `.webm`. The suite includes a conversion step to provide `.mp4` files as requested.
- **Wait Strategies**: Avoided arbitrary `sleep()` calls by using Playwright's built-in auto-waiting and explicit `waitFor` on specific UI states.

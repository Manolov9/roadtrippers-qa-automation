# Roadtrippers QA Automation Suite

This repository contains an automated testing suite for the [Roadtrippers](https://roadtrippers.com) trip planning flow using Playwright and TypeScript.

## Project Structure

- `tests/`: Contains the test specification files.
- `pages/`: Page Object Model (POM) classes representing the website's pages.
- `evidence/`: Stores video recordings of successful test runs.
- `playwright.config.ts`: Configuration for Playwright, including browser settings and video recording.

## Features

- **Happy Path Testing**: Verifies the creation of a trip to Sofia, Bulgaria.
- **Edge Case Testing**: Handles scenarios with identical origin and destination.
- **Negative Testing**: Ensures proper validation when required fields are missing.
- **Conditional Evidence**: Video recordings are automatically saved only for **passed** tests. Failed test videos are discarded to save space and focus on valid evidence.
- **Page Object Model**: Clean separation of concerns between test logic and UI locators.

## Prerequisites

- Node.js (v16 or higher)
- npm

## Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Manolov9/roadtrippers-qa-automation.git
   cd roadtrippers-qa-automation
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install chromium
   ```

## Running Tests

To run all tests in headless mode:
```bash
npm test
```

To run tests and view the report:
```bash
npm test && npm run show-report
```

## Evidence

Successful test runs will generate video files in the `evidence/` directory. These files are named after the test case for easy identification.

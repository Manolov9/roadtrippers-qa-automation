# Roadtrippers Automation Technical Assessment

This repository contains the automated test suite and CI/CD strategy for the Roadtrippers trip planning feature, as part of the Automation QA Engineer technical assessment.

## Project Structure

- `part1-automation/`: Playwright TypeScript test suite using Page Object Model.
- `part2-ci-strategy/`: Strategy document for CircleCI integration.
- `part3-bonus/`: Extensions and additional recommendations.
- `.circleci/`: Sample configuration for continuous integration.

## Setup Instructions

1. **Prerequisites:**
   - Node.js (v18 or higher)
   - npm

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright Browsers:**
   ```bash
   npx playwright install chromium
   ```

## Execution Instructions

- **Run all tests:**
  ```bash
  npx playwright test
  ```

- **Run tests in headed mode:**
  ```bash
  npx playwright test --headed
  ```

- **View Test Report:**
  ```bash
  npx playwright show-report
  ```

## Trade-offs and Decisions

- **Framework Choice:** Playwright was chosen for its superior speed, built-in auto-waiting, and excellent developer experience. It is the modern standard for web automation.
- **Wait Strategy:** Used Playwright's native assertions (e.g., `expect(page).toHaveURL()`) and locator-based actions which handle waiting automatically, avoiding brittle `sleep()` calls.
- **Scenario Selection:** Focused on the core value proposition (creating a trip) while including a common edge case (same start/end) and a negative scenario (missing input).
- **Time Spent:** Approximately 4 hours.

## Deliverables
- [x] Automated test implementation (TypeScript + Playwright)
- [x] Page Object Model structure
- [x] CI/CD Strategy & CircleCI config
- [x] Documentation and Trade-offs

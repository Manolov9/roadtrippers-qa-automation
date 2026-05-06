# CI/CD Integration Strategy - Roadtrippers Automation

This document outlines the strategy for integrating the Playwright test suite into the Roadpass Digital development workflow using CircleCI.

## 1. Test Suite Overview
The current suite consists of 6 automated tests:

### UI Tests (3 Scenarios)
- **Happy Path**: Create a new trip with valid origin and destination.
- **Edge Case**: Create a trip with the same origin and destination.
- **Negative Scenario**: Attempt to create a trip with a missing destination.

### API Tests (3 Scenarios)
- **Trip Creation**: POST /api/v2/trips to create a new trip.
- **Trip Retrieval**: GET /api/v2/trips/{id} to fetch trip details.
- **Validation Error**: POST /api/v2/trips with empty body to verify error handling.

## 2. Pipeline Configuration

### Triggers
- **Pull Requests:** Run the full test suite on every PR to `main` or `develop` branches.
- **Scheduled Runs:** Execute a nightly regression suite against the staging/production environment.
- **Merge to Main:** Final smoke test before deployment.

### Parallelization
Playwright supports native sharding. For larger suites, we recommend:
- Splitting tests across multiple containers using CircleCI's `parallelism` key.
- Using Playwright's `--shard=x/y` flag to distribute tests evenly.

## 3. CircleCI Configuration
The configuration file is located at `.circleci/config.yml`. It handles:
- Environment setup (Node.js, Browser dependencies).
- Dependency caching.
- Test execution with JUnit reporting.
- Artifact storage in the `test-results` directory for failure analysis (screenshots, MP4 videos).

## 4. Handling Failures and Reporting

### Artifacts
- **Test Results Directory**: All artifacts (screenshots, MP4 videos) are consolidated in the `test-results` folder.
- **Trace Viewer**: Retain traces for failed tests to allow developers to "replay" the failure.

### Notifications
- **Slack Integration:** Send immediate alerts to the QA/Engineering channel for failed builds on `main`.
- **PR Comments:** Use a bot to comment on PRs with a summary of test results.

## 5. Flaky Test Management
- **Detection:** Use Playwright's built-in retry mechanism.
- **Quarantine:** Tests that fail consistently across retries but pass in subsequent runs are tagged as `@flaky`.
- **Ownership:** Each failure is automatically assigned to the team responsible for the feature area.

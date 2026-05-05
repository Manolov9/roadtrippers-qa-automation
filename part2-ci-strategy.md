# Part 2: CI/CD Integration Strategy

This document outlines the strategy for integrating the Roadtrippers automated test suite into a CircleCI pipeline.

## 1. Pipeline Configuration

### Triggers
- **Pull Requests**: Every PR targeting `main` or `develop` will trigger the test suite.
- **Merge to Main**: A full suite run after merging to ensure stability.
- **Scheduled Runs**: Nightly builds to detect environmental issues or external site changes.

### Parallelization
- Utilize CircleCI's `parallelism` key to split tests across multiple nodes.
- Playwright's native sharding (`--shard=$CIRCLE_NODE_INDEX/$CIRCLE_NODE_TOTAL`) will be used to distribute tests efficiently.

## 2. CircleCI Configuration (`.circleci/config.yml`)

```yaml
version: 2.1
orbs:
  node: circleci/node@5.1.0

jobs:
  test:
    docker:
      - image: mcr.microsoft.com/playwright:v1.43.0-jammy
    parallelism: 2
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Run Playwright Tests
          command: npx playwright test --shard=$CIRCLE_NODE_INDEX/$CIRCLE_NODE_TOTAL
      - store_test_results:
          path: test-results
      - store_artifacts:
          path: playwright-report
          destination: playwright-report
      - store_artifacts:
          path: evidence
          destination: evidence

workflows:
  test-workflow:
    jobs:
      - test
```

## 3. Failure Handling and Reporting
- **Artifacts**: All failed test screenshots and traces are stored as CircleCI artifacts.
- **JUnit Output**: Playwright is configured to produce JUnit XML, which CircleCI uses to show detailed test failures in the "Tests" tab.
- **Notifications**: Integration with Slack to notify the engineering channel on build failures.
- **PR Comments**: Use a GitHub Action or CircleCI orb to post a summary of test results directly on the PR.

## 4. Flaky Test Management
- **Detection**: Use Playwright's `retries` to identify flaky tests (tests that pass on retry).
- **Quarantine**: Flaky tests will be tagged with `@flaky` and moved to a separate suite that doesn't block the pipeline until fixed.
- **Retry Policy**: 2 retries in CI, 0 in local development.

## 5. Metrics for Effectiveness
1. **Pass Rate**: Percentage of tests passing on the first run.
2. **Mean Time to Repair (MTTR)**: How quickly flaky or failing tests are resolved.
3. **Execution Time**: Monitoring the duration of the test suite to ensure the feedback loop remains fast.
4. **Flakiness Index**: Ratio of flaky tests to total tests to measure suite health.

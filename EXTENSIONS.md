# Optional Bonus: Extensions

## API Testing Examples
While automating the UI, I observed several critical API endpoints:
- `POST /v2/trips`: Creates the initial trip object.
- `GET /v2/trips/{id}/waypoints`: Retrieves the current route.
- `PUT /v2/trips/{id}/waypoints`: Updates the trip with new stops.

**Recommendation:** Implement a set of API tests using Playwright's `request` context to verify these endpoints independently of the UI. This provides faster feedback and isolates backend issues.

## Visual Regression Testing
For a map-heavy application like Roadtrippers, visual regressions are a high risk.
- **Tool Recommendation:** **Applitools Eyes** or Playwright's native `toHaveScreenshot()`.
- **Approach:** Capture baseline images of the map with specific routes and compare them in CI. This catches issues where the route line might be missing or misaligned despite the data being correct.

## Accessibility Testing
- **Approach:** Use `@axe-core/playwright` to run automated accessibility audits.
- **Integration:** Add a test case that scans the trip planner modal for WCAG compliance (color contrast, aria-labels, keyboard navigation).

## Performance Testing
- **Observation:** The map loading and route calculation are the most performance-sensitive areas.
- **Recommendation:** Use **Lighthouse** integration or Playwright's CDPSession to capture trace events and measure "Time to Interactive" for the map.

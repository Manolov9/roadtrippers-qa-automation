# Optional Bonus: Extensions

## API Testing Examples
I have implemented 3 automated API test cases using Playwright's `request` context to verify the core trip management functionality:

1.  **POST /api/v2/trips**: Verifies successful creation of a new trip (Returns 201 Created).
2.  **GET /api/v2/trips/{id}**: Verifies retrieval of trip data for an existing trip (Returns 200 OK).
3.  **POST /api/v2/trips (Negative)**: Verifies that the API correctly handles invalid requests with a 400 Bad Request when the trip body is empty.

These tests provide fast feedback and ensure the backend services powering the UI are stable.

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

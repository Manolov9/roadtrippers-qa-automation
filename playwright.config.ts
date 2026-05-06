import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: false, // Run sequentially for more stable recording
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: 1,
  outputDir: 'test-results', // All results in one place
  reporter: [['list'], ['html', { outputFolder: 'test-results/html-report' }]],
  use: {
    baseURL: 'https://maps.roadtrippers.com',
    trace: 'off',
    video: 'on', // Record video for all tests
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

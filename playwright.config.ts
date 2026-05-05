import { defineConfig, devices } from '@playwright/test';
import * as path from 'path';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'https://roadtrippers.com',
    trace: 'on-first-retry',
    // Video recording configuration
    // Note: To only keep videos on pass, we will handle this in the test or via a custom cleanup
    // But Playwright's built-in 'on' records everything. 
    // We will use 'on' and then a global teardown or post-test hook to delete failed videos.
    // However, the user specifically asked for "saved everytime when the test case is successfully passed. If something is failed - to be not recorded."
    video: {
      mode: 'on',
      dir: 'evidence/',
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});

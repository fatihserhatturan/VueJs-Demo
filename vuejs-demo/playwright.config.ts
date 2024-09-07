import { defineConfig } from 'playwright/test';

export default defineConfig({
  testDir: './src/tests/',
  use: {
    headless: true,
  },
});

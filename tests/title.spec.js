
const { test, expect } = require('@playwright/test');

test('Open website and check its title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);
});

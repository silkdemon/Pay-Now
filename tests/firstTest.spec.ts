import { expect, test } from '@playwright/test'

test('open main page', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await expect(
    page.getByText('Create Your Account With Zero Charges'),
  ).toBeVisible()
})

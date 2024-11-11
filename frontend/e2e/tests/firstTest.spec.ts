import { expect, test } from '@playwright/test';

test('open main page', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle('Pay Now');
    await expect(page.getByText('Create Your Account With Zero Charges')).toBeVisible();
});

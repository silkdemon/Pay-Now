/**
 * TODO:
 * import random data generator
 * find authorisation form form
 * find create account button and click
 * check, that registration form was opend
 * fill in the form with randome value
 * click create account button
 * intecept registration request
 * check that new account was created
 * check that new account page was opend
 */

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { PageManager } from '../page-objects/pageManager';

const testEmail = faker.internet.email({ firstName: 'test', provider: 'test.com' });
const testPasword = faker.internet.password({ length: 6 });
const testName = faker.person.firstName();
const testPhoneNumber = faker.string.numeric(10);
const testWalletPin = faker.internet.password({ length: 6, pattern: /[0-9]/ });

test('registration', async ({ page }) => {
    const pm = new PageManager(page);

    await page.goto('/');
    await pm.onInitialPage.clickCreateAccount();

    await expect(page).toHaveURL(/.*register/);

    await pm.onRegistrationPage.fillInRegistrationFormAndClickCreateButton(testEmail, testPasword, testName, testPhoneNumber, testWalletPin);
    const registrationResponse = await page.waitForResponse('http://localhost:3000/auth/register');
    expect(registrationResponse.ok()).toBeTruthy();
    await expect(page).toHaveURL(/.*home/);
});

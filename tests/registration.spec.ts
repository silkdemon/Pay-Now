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

import { test, expect } from '@playwright/test'
import { faker} from '@faker-js/faker'

const testEmail = faker.internet.email({firstName: 'test', provider:'test.com'})
const testPasword = faker.internet.password({length: 6})
const testName = faker.person.firstName()
const testPhoneNumber = faker.string.numeric(10)
const testWalletPin = faker.internet.password({length: 6, pattern:/[0-9]/})

test('registration', async ({page}) => {
    await page.goto('/')
    await page.getByText('Create account').click()

    await expect(page).toHaveURL(/.*register/)

    await page.getByLabel('Your email').fill(testEmail)
    await page.getByLabel('Password', {exact: true}).fill(testPasword)
    await page.getByLabel('Confirm password').fill(testPasword)
    await page.getByPlaceholder('Your Name').fill(testName)
    await page.getByLabel('Phone Number').fill(testPhoneNumber)
    await page.getByLabel('Create Wallet pin').fill(testWalletPin)
    await page.getByLabel('I accept theTerms and').check()
    await page.getByRole('button', { name: 'Create an account' }).click()
    const registrationResponse = await page.waitForResponse('http://localhost:3000/auth/register')
    expect(registrationResponse.ok()).toBeTruthy()
    await expect(page).toHaveURL(/.*home/)
    
})

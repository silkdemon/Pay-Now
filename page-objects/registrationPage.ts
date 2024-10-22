import { Page } from '@playwright/test'

export class RegistrationPage {

    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    /**
     * Fill in registration form with passed data and click Create account button. All parameres are optional
     * @param email 
     * @param password - valid value is min 6 characters
     * @param name 
     * @param phone - valid value is string of 10 digits
     * @param pin - valid valuue is string of 6 digits
     */
    async fillInRegistrationFormAndClickCreateButton(email?: string, password?: string, name?: string, phone?: string, pin?: string){
        if(email)
            await this.page.getByLabel('Your email').fill(email)
        if(password)
            await this.page.getByLabel('Password', {exact: true}).fill(password)
        if(password)
            await this.page.getByLabel('Confirm password').fill(password)
        if(name)
            await this.page.getByPlaceholder('Your Name').fill(name)
        if(phone)
            await this.page.getByLabel('Phone Number').fill(phone)
        if(pin)
            await this.page.getByLabel('Create Wallet pin').fill(pin)
        await this.page.getByLabel('I accept theTerms and').check()
        await this.page.getByRole('button', { name: 'Create an account' }).click()
    }
}
import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
    urlPath = '/register';

    readonly page: Page;
    private readonly getEmailInput: Locator;
    readonly getPasswordInput: Locator;
    readonly getPasswordConfirmInput: Locator;
    readonly getNameInput: Locator;
    readonly getPhoneInput: Locator;
    readonly getPinInput: Locator;
    readonly getAcceptCheckBox: Locator;
    readonly getCreateButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.getEmailInput = page.getByLabel('Your email');
        this.getPasswordInput = page.getByLabel('Password');
        this.getPasswordConfirmInput = page.getByLabel('Confirm password');
        this.getNameInput = page.getByLabel('Your Name');
        this.getPhoneInput = page.getByLabel('Phone Number');
        this.getPinInput = page.getByLabel('Create Wallet pin');
        this.getAcceptCheckBox = page.getByLabel('I accept theTerms and');
        this.getCreateButton = page.getByRole('button', { name: 'Create an account' });
    }

    private async setEmail(email: string) {
        await this.getEmailInput.fill(email);
    }

    private async setPassword(password: string) {
        await this.getPasswordInput.fill(password);
    }

    private async setPasswordConfirm(password: string) {
        await this.getPasswordConfirmInput.fill(password);
        await this.page.fill('', password);
    }

    private async setName(name: string) {
        await this.getNameInput.fill(name);
    }

    private async setPhone(phone: string) {
        await this.getPhoneInput.fill(phone);
    }

    private async setPin(pin: string) {
        await this.getPinInput.fill(pin);
    }

    /**
     * Fill in registration form with passed data and click Create account button. All parameters are optional
     * @param email
     * @param password - valid value is min 6 characters
     * @param name
     * @param phone - valid value is string of 10 digits
     * @param pin - valid valuue is string of 6 digits
     */
    async fillInRegistrationFormAndClickCreateButton(email?: string, password?: string, name?: string, phone?: string, pin?: string) {
        if (email) await this.setEmail(email);
        if (password) {
            await this.setPassword(password);
            await this.setPasswordConfirm(password);
        }
        // if (password) await this.page.getByLabel('Confirm password').fill(password);
        if (name) await this.setName(name);
        if (phone) await this.setPhone(phone);
        if (pin) await this.setPin(pin);
        await this.getAcceptCheckBox.check();
        await this.getCreateButton.click();
    }
}

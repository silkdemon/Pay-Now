import { Page } from '@playwright/test';
import { InitialPage } from './initialPage';
import { RegistrationPage } from './registrationPage';

export class PageManager {
    private readonly page: Page;
    private readonly initialPage: InitialPage;
    private readonly registrationPage: RegistrationPage;

    constructor(page: Page) {
        this.page = page;
        this.initialPage = new InitialPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
    }

    get onInitialPage() {
        return this.initialPage;
    }

    get onRegistrationPage() {
        return this.registrationPage;
    }
}

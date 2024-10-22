import { Page } from '@playwright/test'

export class InitialPage {
    
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async clickCreateAccount(){
        await this.page.getByText('Create account').click()
    }
}
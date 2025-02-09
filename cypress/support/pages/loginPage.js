import loginPageLocators from "../locators/loginPageLocators";


export class LoginPage {

    login(){
        cy.get(loginPageLocators.usernameInputField).type('standard_user')
        cy.get(loginPageLocators.passwordInputField).type('secret_sauce')
        cy.get(loginPageLocators.loginButton).click()
        cy.wait(500)
        cy.get(loginPageLocators.appLogoText).should('contain.text', 'Swag Labs')
    }

}

export const loginPage = new LoginPage();
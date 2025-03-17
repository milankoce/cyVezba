import loginPageLocators from "../locators/loginPageLocators";


export class LoginPage {

    loginSuccessfull(){
        cy.fixture('data').then((data) => {
            cy.get(loginPageLocators.usernameInputField).type(data.username)
            cy.get(loginPageLocators.passwordInputField).type(data.password)
        })
        cy.get(loginPageLocators.loginButton).click()
        cy.wait(500)
        cy.fixture('anotherData').then((anotherData) => {
        cy.get(loginPageLocators.appLogoText).should('contain.text', anotherData.logoText)
        })
    }   
    loginWithInvalidUserName(){
        cy.get(loginPageLocators.usernameInputField).type('Bobana')
        cy.get(loginPageLocators.passwordInputField).type('secret_sauce')
        cy.get(loginPageLocators.loginButton).click()
        cy.wait(500)
        cy.get(loginPageLocators.errorMessage).should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
    }
    loginWithInvalidPassword(){
        cy.get(loginPageLocators.usernameInputField).type('standard_user')
        cy.get(loginPageLocators.passwordInputField).type('Bobana')
        cy.get(loginPageLocators.loginButton).click()
        cy.wait(500)
        cy.get(loginPageLocators.errorMessage).should('be.visible')
        .and('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get(loginPageLocators.errorButton).should('be.visible')
    }

}

export const loginPage = new LoginPage();
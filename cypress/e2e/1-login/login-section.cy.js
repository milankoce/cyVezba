import { loginPage} from "../../support/pages/loginPage";

describe('validating successfull login', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('sauceDemoUrl'))
    })

    it('verify log in with valid credentials', () => {
        loginPage.loginSuccessfull()
    })
}) 

describe('validating unsuccessfull login', () => {

    beforeEach(() => {
        cy.visit('/')
    })
    it('verify that user cannot log in with invalid username', () => {
        loginPage.loginWithInvalidUserName()
    })

    it('verify that user cannot log in with invalid password', () => {
        loginPage.loginWithInvalidPassword()
    })
})


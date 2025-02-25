import { loginPage} from "../../support/pages/loginPage";

describe('validating successfull login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('verify log in with valid credentials', () => {
        loginPage.loginSuccessfull()
    })
}) 

describe('validating unsuccessfull login', () => {

    it('verify that user cannot log in with invalid username', () => {
        
    })

    it('verify that user cannot log in with invalid password', () => {

    })
})


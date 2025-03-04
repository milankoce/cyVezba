import { loginPage} from "../../support/pages/loginPage";
import { homePage } from "../../support/pages/homePage";

describe('Home Section', () => {
   
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.loginSuccessfull()
    });

    it('verify visibility of home screen elements', () => {
        homePage.verifyHomePageElements();
    });

    it.only('verify successfully added item to the cart', () => {
        homePage.verifyElementInCart();
    })
});

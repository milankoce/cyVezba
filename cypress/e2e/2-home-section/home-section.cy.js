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

    it('verify successfully added item to the cart', () => {
        homePage.verifyElementInCart();
    })
    it('verify successfully added first item to the cart', () => {
        homePage.verifyElement1InCart();
    })
    it('verify successfully added third item to the cart', () => {
        homePage.verifyElement3InCart();
    })
    it('verify successfully added 4. item to the cart', () => {
        homePage.verifyElement4InCart();
    })
    it ('verify successfully added 5. item to the cart', () => {
        homePage.verifyElement5InCart();
    })
    it('verify successfully added 6. item to the cart', () => {
        homePage.verifyElement6InCart();
    })
    it('verify successfully added two items to the cart', () => {
        homePage.verifyFirstAndThirdElementInCart();
    })
    it('verify successfully added two random items to the cart', () => {
        homePage.verifyRandomElementsInCart();
    })
});

import { loginPage } from "../../support/pages/loginPage";
import { homePage } from "../../support/pages/homePage";

describe('Home section burger menu', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')
        loginPage.loginSuccessfull()
    });


    it('verify visibility of burger menu options', () => {
        homePage.burgerMenu();
    })

    it('verify all items section', () => {
        homePage.allItemsBurgerMenu();
    })

    it('verify about section', () => {
        homePage.aboutBurgerMenu();
    })

    it('verify logout section', () => {
        homePage.userCanLogout();
    })
//ako zelis da ih iskljucis stavis x
    it('verify reset app state section', () => {
        homePage.resetApp();
    })
});
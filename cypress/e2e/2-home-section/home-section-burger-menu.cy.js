import { loginPage} from "../../support/pages/loginPage";
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

    xit('verify about section', () => {

    })

    xit('verify logout section', () => {

    })

    xit('verify reset app state section', () => {

    })
});
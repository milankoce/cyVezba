import homePageLocators from "../locators/homePageLocators";
import loginPageLocators from "../locators/loginPageLocators";

export class HomePage {

    verifyHomePageElements() {
        cy.url().should('include', '/inventory.html')
        cy.get(homePageLocators.headerLabel)
            .should('be.visible')
            .and('have.text', 'Swag Labs')
        cy.get(homePageLocators.cartButton)
            .should('be.visible')
        cy.get(homePageLocators.burgerMenuBtn)
            .should('be.visible')
            .and('have.attr', 'type', 'button')
        cy.get(homePageLocators.pageTitle)
            .should('be.visible')
            .and('contain.text', 'Products')
        cy.get(homePageLocators.sortModal)
            .should('be.visible')
            .and('contain', 'Name (A to Z)')
            .and('contain', 'Name (Z to A)')
            .and('contain', 'Price (low to high)')
            .and('contain', 'Price (high to low)')
    }

    burgerMenu() {
        cy.get(homePageLocators.burgerMenuBtn).click();
        cy.get(homePageLocators.burgerMenuItemList)
            .should('be.visible')
            .and('contain.text', 'All Items')
            .and('contain.text', 'About')
            .and('contain.text', 'Logout')
            .and('contain.text', 'Reset App State')
    }

    allItemsBurgerMenu() {
        cy.get(homePageLocators.burgerMenuBtn).click();
        cy.get(homePageLocators.allItemsBurgerMenuBtn)
            .should('be.visible')
            .and('have.text', 'All Items')
            .click();
        //cy.url().should('include', '/allitems.html')

    }
    aboutBurgerMenu() {
        cy.get(homePageLocators.burgerMenuBtn).click();
        cy.get(homePageLocators.aboutBurgerMenuBtn).click();
        cy.origin('https://saucelabs.com/', () => {
            cy.url().should('include', 'saucelabs');
        });
//        cy.get(homePageLocators.aboutSauceBtn).should('be.visible').and('contain.text', 'Test it all. Free')

    }
    userCanLogout() {
        cy.get(homePageLocators.burgerMenuBtn).click();
        cy.get(homePageLocators.logoutBurgerMenuBtn).click();
        cy.url().should('eq', 'https://www.saucedemo.com/')
        cy.get(loginPageLocators.loginButton).should('be.visible')
    }
    resetApp() {
        cy.get(homePageLocators.burgerMenuBtn).click();
        cy.get(homePageLocators.resetAppState).click();
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html');

    }
}

export const homePage = new HomePage();
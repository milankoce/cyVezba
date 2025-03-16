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
    verifyElementInCart() {
        cy.get(homePageLocators.itemPrice)
            .eq(1)  // Selektuj drugi element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                cy.get(homePageLocators.addToCartButton).click()
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });
    }
         addToCart(index) {
        cy.get('[data-test="inventory-item"]')
          .eq(index)  // Selektuje proizvod na osnovu indeksa
          .find('button')  // Nalazi dugme unutar tog proizvoda
          .click();  // Klikne na dugme "Add to Cart"
      }
    verifyElement1InCart() {
        cy.get(homePageLocators.itemPrice)
            .eq(0)  // Selektuj prvi element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                this.addToCart(0)
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });
    }

    verifyElement3InCart() {
        cy.get(homePageLocators.itemPrice)
            .eq(2)  // Selektuj treci element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                this.addToCart(2)
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });

    }
    verifyElement4InCart() {
        cy.get(homePageLocators.itemPrice)
            .eq(3)  // Selektuj cetvrti element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                this.addToCart(3)
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });

    }
    verifyElement5InCart() {
        cy.scrollTo('bottom');
        cy.get(homePageLocators.itemPrice)
            .eq(4)  // Selektuj prvi element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                this.addToCart(4)
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });
    }
    verifyElement6InCart() {
        cy.scrollTo('bottom')    
        cy.get(homePageLocators.itemPrice)
            .eq(5)  // Selektuj prvi element u nizu
            .invoke('text')  // Uzmi njegov tekst
            .then((text) => {
                cy.log(text) // Ispisi text u konzoli
                this.addToCart(5)
                cy.get(homePageLocators.cartButton).click()
                cy.get(homePageLocators.itemInTheCart)
                    .should('contain', text); // Verifikacija da je text iznad u korpi
            });
    }

     addMultipleToCart(elements) {
        elements.forEach((index) => {
          cy.get('[data-test="inventory-item"]')
            .eq(index)  // Selektuje proizvod na osnovu indeksa
            .find('button')  // Nalazi dugme unutar tog proizvoda
            .click();  // Klikne na dugme "Add to Cart"
        });
    }

    verifyFirstAndThirdElementInCart() {
        const selectedIndexes = [0, 2]; // Indeksi za prvi i treći element
        const selectedItems = []; // Čuva tekst proizvoda

        selectedIndexes.forEach((index) => {
            cy.get(homePageLocators.itemPrice)
                .eq(index)
                .invoke("text")
                .then((text) => {
                    selectedItems.push(text); // Čuvamo tekst proizvoda
                    cy.log(`Dodajem u korpu: ${text}`);
                });
        });
          // Klik na dugme "Add to Cart" za odabrane elemente
          this.addMultipleToCart(selectedIndexes)
        // Otvaramo korpu i proveravamo da su proizvodi tu
        cy.get(homePageLocators.cartButton).click();

        selectedItems.forEach((item) => {
            cy.get(homePageLocators.itemInTheCart).should("contain", item);
        });


    }

    verifyRandomElementsInCart() {
        cy.get(homePageLocators.itemPrice).then((items) => {
            // Uzimamo dva nasumična indeksa
            const randomIndexes = Cypress._.sampleSize([...Array(items.length).keys()], 2);

            // Čuvamo vrednosti nasumično izabranih elemenata
            const selectedItems = [];

            // Iteracija kroz dva random elementa
            randomIndexes.forEach((index) => {
                cy.get(homePageLocators.itemPrice)
                    .eq(index)
                    .invoke("text")
                    .then((text) => {
                        selectedItems.push(text); // Dodajemo tekst proizvoda u niz
                        cy.log(`Dodajem u korpu: ${text}`);
                    });
            });
              // Klik na dugme "Add to Cart"
              this.addMultipleToCart(randomIndexes)

            // Otvori korpu i proveri da su proizvodi tu
            cy.get(homePageLocators.cartButton).click();

            selectedItems.forEach((item) => {
                cy.get(homePageLocators.itemInTheCart).should("contain", item);
            });
        });
    }
}


export const homePage = new HomePage();
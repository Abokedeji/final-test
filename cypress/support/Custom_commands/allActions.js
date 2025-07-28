let allActions
let allActionspath = 'cypress/support/Custom_commands/allActions.js'



Cypress.Commands.add('clickAnyButtonwithText', (text) => {
  cy.contains('button', text).click();
});

Cypress.Commands.add('clickAnyDivwithText', (text) => {
  cy.contains('div', text).click();
});

Cypress.Commands.add('clickAnyLinkwithText', (text) => {
  cy.contains('a', text).click();
});

Cypress.Commands.add('addToCart', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.addToCartButton).click();
  });
});

Cypress.Commands.add('goToCart', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.goToCartButton).click();
  });
});

Cypress.Commands.add('clickFurnitureCategory', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.furnitureCategory).click();
  });
});

Cypress.Commands.add('clickDecorationCategory', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.decorationCategory).click();
  });
});

Cypress.Commands.add('verifyCartItem', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.cartItem).should('be.visible');
  });
});

Cypress.Commands.add('cartIconUpdate', () => {
  cy.fixture('elements').then((sel) => {
    cy.get(sel.elements.allElements.cartIcon).should('be.visible').and('have.text', '1');
  });
});
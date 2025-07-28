import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(/^I am on the home page$/, () => {
    cy.visit('/');
    cy.clickAnyButtonwithText('Accept All Cookies');
});


When(/^I click on Furniture category$/, () => {
	cy.clickAnyDivwithText('Furniture');
});


When(/^I click on Round Wooden Coffee Table Dan$/, () => {
	cy.clickAnyLinkwithText('Round Wooden Coffee Table Dan');
});



When(/^I click on Add to Cart$/, () => {
	cy.addToCart();
});


When(/^I click on Go to cart button$/, () => {
	cy.goToCart();
});



Then(/^I should see Round Wooden Coffee Table Dan in the cart$/, () => {
	cy.verifyCartItem().contains('Round Wooden Coffee Table Dan');
});

Then(/^the cart icon should show a badge with 1$/, () => {
	cy.cartIconUpdate();
});


When(/^I click on Decoration category$/, () => {
	cy.clickAnyDivwithText('Decoration');
});

When(/^I click on Candle Holder Lily$/, () => {
	cy.clickAnyLinkwithText('Candle Holder Lily');
});


Then(/^I should see Candle Holder Lily in the cart$/, () => {
	cy.verifyCartItem().contains('Candle Holder Lily');
});


When(/^I click on Rugs category$/, () => {
	cy.clickAnyDivwithText('RUGS');
});


When(/^I click on Chenille Rug Mahdi$/, () => {
	cy.clickAnyDivwithText('Chenille Rug Mahdi');
});


Then(/^I should see Chenille Rug Mahdi in the cart$/, () => {
	cy.verifyCartItem().contains('Chenille Rug Mahdi');
});




















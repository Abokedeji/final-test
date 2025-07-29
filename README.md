# Final Project – Cypress E2E Testing with Cucumber

This project tests key user journeys of an e-commerce site using Cypress and Cucumber (Gherkin syntax). It verifies that users can add items to the cart from Furniture, Decoration, and Rugs categories, and confirms cart updates visually and functionally.

## Installed Libraries

These packages are required and already installed in `package.json`:

- [`cypress`](https://www.npmjs.com/package/cypress) – This is an End-to-end testing framework
- [`@badeball/cypress-cucumber-preprocessor`](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor) – This is a Cucumber preprocessor for Cypress
- [`cypress-mochawesome-reporter`](https://www.npmjs.com/package/cypress-mochawesome-reporter) –  This generates HTML test reports


- [`esbuild`](https://www.npmjs.com/package/esbuild) – This is a fast JavaScript bundler used for preprocessing


## Project Structure

Final-test/

├── cypress/

│ ├── e2e/

│ │ └── features/

│ │ └── add-to-cart.feature

│ ├── support/

│ │ ├── commands.js

│ │ └── Custom_commands/

│ │ └── allActions.js

│ ├── fixtures/

│ │ └── elements.json

├── cypress.config.js

├── package.json

└── README.md


## Technologies Used

- [Cypress](https://www.cypress.io/) – JavaScript E2E testing framework
- [Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor) – for Gherkin-style test definitions

## Getting Started

NOTE: Ensure node is installed on your computer.

#### 1. Clone the Repository

`git clone https://github.com/Abokedeji/final-test`

#### 2. Navigate into the cloned folder


#### 3. Install Dependencies

`npm install`

#### 4. Run Tests

`npx cypress open --e2e`

#### 5. Run headlessly

`npx cypress run`

## Test Scenarios

### Feature: Add Products to Cart
This feature validates that users can:

- Add “Round Wooden Coffee Table Dan” from the Furniture category

- Add “Candle Holder Lily” from the Decoration category

- Add “Chenille Rug Mahdi” from the Rugs category

### Each scenario checks:

- The item appears in the cart

- The cart icon updates with a badge showing quantity 1

## Contact
All questions/issues can be sent to me via [email](mailto:okedejiabiodun@gmail.com)

[Linkedln](https://www.linkedin.com/in/abiodun-okedeji-3a9274273/)
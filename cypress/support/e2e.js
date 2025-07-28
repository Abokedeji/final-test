
// Import commands.js using ES2015 syntax:
import './commands';
import './Custom_commands/allActions';

beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
})

            
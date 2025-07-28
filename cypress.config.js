
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  createEsbuildPlugin,
} = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.westwingnow.de/en',
        viewportHeight: 960,
        viewportWidth: 1620,
        pageLoadTimeout: 60000,
        defaultCommandTimeout: 15000,
        chromeWebSecurity: false,
        specPattern: '**/*.feature',
        setupNodeEvents,
    }
});
    
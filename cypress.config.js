const { defineConfig } = require("cypress");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createEsbuildPlugin(config));
      return config;
    },
    specPattern: "cypress/e2e/**/*.feature",
    baseUrl: "http://localhost:3000", // change this base URL as per development/production
    video: false
  },
});

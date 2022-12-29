const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "src/tests/**/*.cy.{js,jsx,ts,tsx}",
    supportFile:	"src/support/e2e.{js,jsx,ts,tsx}",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    base_url: "http://localhost:8081/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

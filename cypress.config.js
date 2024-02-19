const { defineConfig } = require("cypress");

module.exports = {
  projectId: '2od8hz',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : "https://www.google.com"
  },
};

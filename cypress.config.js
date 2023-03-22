const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    defaultCommandTimeout: 5000,
    execTimeout: 5000,
    taskTimeout: 5000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: "cypress/reports/mochawesome-report/assets",
    videosFolder: "cypress/reports/mochawesome-report/assets",
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        reporter: "mochawesome",
        reporterOptions: {
            reportDir: "cypress/reports/mochawesome-report",
            overwrite: true,
            html: false,
            json: true,
        },
    },
});

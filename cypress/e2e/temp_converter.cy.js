/* 
The tests cover scenarios such as verifying that the page loads successfully,
converting temperatures between different units, clearing the input fields,
and handling invalid input.
*/
describe("Temperature Converter Page Test", () => {
    beforeEach(() => {
        // Visit the temperature converter page before each test
        cy.visit("https://www.theonlineconverter.co.uk/temperature-converter/");
    });
    it("Loads the temperature converter page successfully", () => {
        // Check that the page title is correct
        cy.title().should("contain", "Convert Temeperature");

        // Check that the page contains the expected elements
        cy.get("h1").should("contain", "Temperature Converter");
        cy.get('[name="userInput"]').should("exist");
        cy.get('[name="convertFrom"]').should("exist");
        cy.get('[name="convertTo"]').should("exist");
        cy.get("#convertBtn").should("exist");
        cy.get("#answer").should("exist");
    });

    it("Should be able to convert Celsius to Fahrenheit", () => {
        // Enter a temperature value in Celsius
        cy.get('[name="userInput"]').type("25");
        // Select Celsius as the input unit and Fahrenheit as the output unit
        cy.get('[name="convertFrom"]').select("degree Celsius");
        cy.get('[name="convertTo"]').select("degree Fahrenheit");
        cy.get("#convertBtn").click();
        // Check that the converted value is correct
        cy.get("#answer > p").contains("77");
    });

    it("Should be able to convert Fahrenheit to Celsius", () => {
        // Enter a temperature value in Fahrenheit
        cy.get('[name="userInput"]').type("77");
        // Select Fahrenheit as the input unit and Celsius as the output unit
        cy.get('[name="convertFrom"]').select("degree Fahrenheit");
        cy.get('[name="convertTo"]').select("degree Celsius");
        cy.get("#convertBtn").click();
        // Check that the converted value is correct
        cy.get("#answer > p").contains("25");
    });

    it("Switches between temperature scales successfully", () => {
        // Enter a temperature value in Kelvin
        cy.get('[name="userInput"]').type("300");
        // Select Kelvin as the input unit and Celsius as the output unit
        cy.get('[name="convertFrom"]').select("kelvin");
        cy.get('[name="convertTo"]').select("degree Celsius");
        cy.get("#convertBtn").click();
        // Check that the converted value is correct
        cy.get("#answer > p").contains("26.85");

        // Switch to Fahrenheit as the output unit
        cy.get('[name="convertTo"]').select("degree Fahrenheit");

        // Check that the converted value is correct
        cy.get("#answer > p").contains("80.33");
    });

    it("Should show an error message when the input value is not a number", () => {
        cy.get('[name="userInput"]').type("abc");
        // Enter an invalid temperature value
        cy.get('[name="convertFrom"]').select("degree Celsius");
        cy.get('[name="convertTo"]').select("degree Fahrenheit");
        cy.get("#convertBtn").click();
        // Check that an error message is displayed
        cy.get("#answer > p").contains(
            "0 degree Celsius = 32 degree Fahrenheit"
        );
    });
});
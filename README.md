# Cypress Test Automation

This repository contains automated tests for the temperature converter web application using the Cypress test automation framework.

## Getting Started

Clone the repository: 
```console

git clone https://github.com/AZANIR/anodot-test-automation-frontend.git
```
Install dependencies: 
```console
npm install
```

Start the Cypress test runner:
```console
npm run cy:open
```
Test Scenarios
This test suite covers the following scenarios:

- Verify that the temperature converter page loads successfully.

- Verify that the temperature values are converted correctly.

- Verify that the user can switch between different temperature scales (Celsius, Fahrenheit, Kelvin).

- Verify that the user is shown some message if an invalid temperature value is entered.

## Project Structure
```console
anodot-test-automation-frontend/
  cypress/
    fixtures/
      example.json
    integration/
      temp_converter.cy.js
    plugins/
      index.js
    support/
      commands.js
      index.js
  .gitignore
  cypress.config.js
  package.json
  README.md
```

- **cypress/** - contains all the Cypress test files
- **fixtures/** - contains static test data used in the tests
- **integration/** - contains the test files that will be executed by Cypress
- **plugins/** - contains plugins used to extend Cypress
- **support/** - contains utility functions used by the tests
- **cypress.config.js** - Cypress configuration file

## Running Tests

Tests can be run in headless mode using the following command:
```console
npm run cypress:run
```
Alternatively, tests can be run in the Cypress Test Runner using the following command:
```console
npm run megre_reports
npm run mochaawesome_report
```
Reporting
After running tests, a detailed HTML report can be generated using the following command:
```console
npm run cypress:report
```


# Test plan

To design and implement a test plan for the temperature converter page using Cypress, the following steps can be taken:

Install Cypress: The first step is to install Cypress by following the instructions provided in the Cypress documentation.

Create a new project: Once Cypress is installed, create a new Cypress project by running the command npm init in the project folder and then running the command npm install cypress --save-dev.

Write test cases: After creating the Cypress project, write test cases for the temperature converter page. The following are some examples of test cases that can be written:

- Verify that the temperature converter page loads successfully.

- Verify that the temperature values are converted correctly.

- Verify that the user can switch between different temperature scales (Celsius, Fahrenheit, Kelvin).

- Verify that the user is shown some message if an invalid temperature value is entered.

Execute the tests: Once the test cases have been written, execute them using the Cypress test runner by running the command npx cypress open in the project folder.

Analyze the test results: After executing the tests, analyze the test results and identify any failures or issues that need to be fixed.

Repeat the process: Repeat the process of writing test cases, executing them, and analyzing the results until all the important scenarios have been covered.

## Some of the scenarios that may not be covered by the tests are:

Testing the page on different browsers and devices to ensure that it is responsive and works as expected on all platforms.

Testing the page with large volumes of data to ensure that it can handle high traffic without crashing or slowing down.

Testing the page with different types of input data, such as negative numbers or non-numeric characters.

Testing the page with different user interactions, such as clicking and dragging the input sliders or using the keyboard to input values.

In the future, additional tests should be added to cover these scenarios and ensure that the temperature converter page is thoroughly tested.

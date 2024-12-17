// Generated from: sample.feature
import { test } from "playwright-bdd";

test.describe('Playwright site', () => {

  test('Check title', async ({ Given, page }) => { 
    await Given('I open url "https://playwright.dev"', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('sample.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordOrig":"Given ","keywordType":"Context","stepMatchArguments":[{"group":{"start":11,"value":"\"https://playwright.dev\"","children":[{"start":12,"value":"https://playwright.dev","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end
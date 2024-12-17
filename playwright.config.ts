import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'sample.feature',
  steps: ['steps.ts','./fixture/fixture.ts','./fixture/hooks.ts'],
  
});
export default defineConfig({
  testDir,
timeout:60*10*1000,
  use:{
    headless:true,
    actionTimeout:60*2*1000,
    navigationTimeout:60*3*1000,
  },
  reporter: [['list',{printSteps:true}],
['json',{outputFile:'./reports/test-results.json'}]]
});

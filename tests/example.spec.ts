import { test, expect } from '@playwright/test';
const crypt=require('crypto-js')
var ciphertext = 'U2FsdGVkX18PF2nlKZLhDOV7o83oC/3IekZmb4X0hzs='
const secretKey=process.env.SECRET

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  var bytes  = crypt.AES.decrypt(ciphertext,secretKey);
var originalText = bytes.toString(crypt.enc.Utf8);
// var enc  = crypt.AES.encrypt("test",process.env.npm_config_env).toString();
// console.log(enc)

console.log(originalText); // 'my message'

});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

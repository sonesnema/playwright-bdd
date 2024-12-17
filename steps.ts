import { expect } from '@playwright/test';
import { Given,When,Then,test } from './fixture/fixture';



Given('I open url {string}', async ({ page }, url) => {
  await page.goto('https://www.automationexercise.com/');
  await page.getByRole('heading', { name: ' Women' }).click();
  await page.getByRole('link', { name: ' Women' }).click();
  await page.getByRole('link', { name: 'Dress' }).click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products').hover()
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay').click();
  await page.locator('div:nth-child(4) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('button', { name: 'Continue Shopping' }).click();
  await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products').hover()

  await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay').click();
  await page.locator('div:nth-child(5) > .product-image-wrapper > .single-products > .product-overlay > .overlay-content > .btn').click();
  await page.getByRole('link', { name: 'View Cart' }).click();
  await page.getByText('Proceed To Checkout').click();
  await page.getByRole('button', { name: 'Continue On Cart' }).click();

});

When('I click link {string}', async ({ page }, name) => {
  await page.getByRole('link', { name }).click();
});

Then('I see in title {string}', async ({ page }, keyword) => {
  await expect(page).toHaveTitle(new RegExp(keyword));
});

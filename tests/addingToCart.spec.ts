import { test, expect } from '@playwright/test';

test('test list of items', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
});
test('test add to cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1)
//   toBeVisible();
});

test('test removing from the cart', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="inventory-item"]').click();
  await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  // await expect(page.locator('[data-test="cart-list"]')).toBeEmpty();
  // await expect(page.locator('[data-test="inventory-item"]')).toNotExist();
  await expect(page.locator('.cart_quantity')).toHaveCount(0);
  // await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
});

test.only('test added to cart details', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
//   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
//   await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="item-4-title-link"]').click();
  await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
  await expect(page.locator('[data-test="inventory-item-desc"]')).toBeVisible();
});
//   await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1)
//   toBeVisible();
// });
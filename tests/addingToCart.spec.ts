import { test, expect } from '@playwright/test';

test.describe('Adding to cart tests', () => {
  
  // Arrange
  test.beforeEach(async ({ page }) => {
    const userName = 'standard_user';
    const userPass = 'secret_sauce';
    await page.goto('/');
    await page.locator('#user-name').fill(userName);
    await page.locator('#password').fill(userPass);
  });
  
// Act
  test('listing all items from the main page', async ({ page }) => {
    await page.locator('#login-button').click();

// Assert
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
  });

// Arrange
// Act
  test('adding an item to the cart', async ({ page }) => {
    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('[data-test="shopping-cart-link"]').click();

// Assert
    await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1)
  });

// Arrange
// Act
  test('removing from the cart', async ({ page }) => {

    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="inventory-item"]').click();
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

// Assert
    await expect(page.locator('.cart_quantity')).toHaveCount(0);
  });

  test('details of the added to cart item', async ({ page }) => {
    // Arrange
    // Act
    await page.locator('#login-button').click();
    await page.locator('#add-to-cart-sauce-labs-backpack').click();
    await page.locator('[data-test=item-4-title-link]').click();

// Assert
    await expect(page.locator('[data-test="inventory-item-name"]')).toHaveText('Sauce Labs Backpack');
  });
 
  });
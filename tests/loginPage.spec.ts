import { test, expect } from '@playwright/test';
import { url } from 'inspector';

test.describe('User login fo sauceDemo', () => {
  test.beforeEach(async ({ page }) => {
    // const url = 'https://www.saucedemo.com/';
    await page.goto('/');
  });
  //Arrange
  const userId = 'standard_user';
  const userPass = 'secret_sauce';
  const expectedError = 'Epic sadface: Username and password do not match any user in this service';
//Act
  test('succesfull login with correct creds', async ({ page }) => {
    await page.locator('#user-name').fill(userId);
    await page.locator('#password').fill(userPass);
    await page.locator('#login-button').click();
   
//Assert
    await expect(page.locator('.title')).toHaveText('Products');
  });
// Arrange
// Act
  test('unsuccessful login with incorrect password', async ({ page }) => {
    await page.locator('#user-name').fill(userId);
    await page.locator('#password').fill('secret_sue');
    await page.locator('#login-button').click();

// Assert
    await expect (page.locator('[data-test="error"]')).toHaveText(expectedError);
  });

// Arrange
// Act
  test('unsuccessful login with incorrect username', async ({ page }) => {
    await page.locator('#user-name').fill('karo123');
    await page.locator('#password').fill(userPass);
    await page.locator('#login-button').click();
// Assert
    await expect (page.locator('[data-test="error"]')).toHaveText(expectedError);
  });
  });
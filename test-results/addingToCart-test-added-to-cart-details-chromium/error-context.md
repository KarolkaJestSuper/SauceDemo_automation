# Test info

- Name: test added to cart details
- Location: /Users/karolinakozlowska/Documents/saucedemo/tests/addingToCart.spec.ts:36:6

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('[data-test="inventory-item-des"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('[data-test="inventory-item-des"]')

    at /Users/karolinakozlowska/Documents/saucedemo/tests/addingToCart.spec.ts:46:66
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs 1
- button "Go back Back to products":
  - img "Go back"
  - text: Back to products
- img "Sauce Labs Backpack"
- text: Sauce Labs Backpack carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Remove"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('test list of items', async ({ page }) => {
   4 |   await page.goto('https://www.saucedemo.com/');
   5 |   await page.locator('[data-test="username"]').fill('standard_user');
   6 |   await page.locator('[data-test="password"]').fill('secret_sauce');
   7 |   await page.locator('[data-test="login-button"]').click();
   8 |   await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(6);
   9 | });
  10 | test('test add to cart', async ({ page }) => {
  11 |   await page.goto('https://www.saucedemo.com/');
  12 |   await page.locator('[data-test="username"]').fill('standard_user');
  13 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  14 |   await page.locator('[data-test="login-button"]').click();
  15 |   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  16 |   await page.locator('[data-test="shopping-cart-link"]').click();
  17 |   await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1)
  18 | //   toBeVisible();
  19 | });
  20 |
  21 | test('test removing from the cart', async ({ page }) => {
  22 |   await page.goto('https://www.saucedemo.com/');
  23 |   await page.locator('[data-test="username"]').fill('standard_user');
  24 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  25 |   await page.locator('[data-test="login-button"]').click();
  26 |   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  27 |   await page.locator('[data-test="shopping-cart-link"]').click();
  28 |   await page.locator('[data-test="inventory-item"]').click();
  29 |   await page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  30 |   // await expect(page.locator('[data-test="cart-list"]')).toBeEmpty();
  31 |   // await expect(page.locator('[data-test="inventory-item"]')).toNotExist();
  32 |   await expect(page.locator('.cart_quantity')).toHaveCount(0);
  33 |   // await expect(page.locator('.shopping_cart_badge')).not.toBeVisible();
  34 | });
  35 |
  36 | test.only('test added to cart details', async ({ page }) => {
  37 |   await page.goto('https://www.saucedemo.com/');
  38 |   await page.locator('[data-test="username"]').fill('standard_user');
  39 |   await page.locator('[data-test="password"]').fill('secret_sauce');
  40 |   await page.locator('[data-test="login-button"]').click();
  41 | //   await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  42 | //   await page.locator('[data-test="shopping-cart-link"]').click();
  43 |     await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  44 |   await page.locator('[data-test="item-4-title-link"]').click();
  45 |   await expect(page.locator('[data-test="inventory-item-name"]')).toBeVisible();
> 46 |   await expect(page.locator('[data-test="inventory-item-des"]')).toBeVisible();
     |                                                                  ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  47 | });
  48 | //   await expect(page.locator('[data-test="inventory-item"]')).toHaveCount(1)
  49 | //   toBeVisible();
  50 | // });
```
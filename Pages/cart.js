import { expect } from '@playwright/test';

class CartPage {
  constructor(page) {
    this.page = page;
    this.cartList = page.locator('#cart_contents_container');
    this.checkoutButton = page.locator('#checkout');
  }

  async goToCartPage() {
    await this.page.goto('https://www.saucedemo.com/cart.html');
  }

  async verifyCartVisible() {
    await expect(this.cartList).toBeVisible();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

export default CartPage;

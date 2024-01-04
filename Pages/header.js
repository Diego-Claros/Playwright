import { expect } from '@playwright/test';

class HeaderPage {
  constructor(page) {
    this.page = page;
    this.menuButton = page.locator('#react-burger-menu-btn');
    this.shoppingCart = page.locator('#shopping_cart_container');
    this.logoutLink = page.locator('#logout_sidebar_link');
  }

  async openMenu() {
    await this.menuButton.click();
  }

  async goToShoppingCart() {
    await this.shoppingCart.click();
  }

  async logout() {
    await this.openMenu();
    await this.logoutLink.click();
  }
}

export default HeaderPage;

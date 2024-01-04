import { expect } from '@playwright/test';

class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.orderConfirmationMessage = page.locator('.complete-header');
    this.backHomeButton = page.locator('#back-to-products');
  }

  async verifyOrderCompletion() {
    await expect(this.orderConfirmationMessage).toContainText('Thank you for your order!');
  }

  async returnToHomePage() {
    await this.backHomeButton.click();
  }
}

export default CheckoutCompletePage;

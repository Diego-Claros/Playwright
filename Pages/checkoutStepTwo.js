import { expect } from '@playwright/test';

class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;
    this.finishButton = page.locator('#finish');
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  async verifyCheckoutOverview() {
    await expect(this.finishButton).toBeVisible();
  }
}

export default CheckoutOverviewPage;

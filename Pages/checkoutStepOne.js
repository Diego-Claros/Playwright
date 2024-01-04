import { expect } from '@playwright/test';

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.zipCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
  }
  
  async fillFirstName(firstName) {
    await this.firstNameInput.fill(firstName);
  }

  async fillLastName(lastName) {
    await this.lastNameInput.fill(lastName);
  }

  async fillZipCode(zipCode) {
    await this.zipCodeInput.fill(zipCode);
  }

  async clickContinueButton() {
    await this.continueButton.click();
  }

  async finishCheckout() {
    await this.finishButton.click();
  }

  /*
  async fillCheckoutInformation(firstName, lastName, zipCode) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipCodeInput.fill(zipCode);
    await this.continueButton.click();
  }*/
}

export default CheckoutPage;

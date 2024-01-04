import { expect } from '@playwright/test';

class LoginPage {
  constructor(page) {
    this.page = page;   
    this.usernameInput = page.locator('#user-name');
    this.passwordInput = page.locator('#password');
    this.loginButton = page.locator('#login-button');
  }

  async goToLoginPage() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async fillUsername(username) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

}

export default LoginPage;

import { test, expect } from '@playwright/test'
import LoginPage from '../Pages/login'

test.describe('Login tests for locked out user', () => {
  test('LockedOutUser should see error message', async ({ page }) => {
    const loginPage = new LoginPage(page)

    // Navigate to the login page
    await loginPage.goToLoginPage()

    // Log in with locked out user credentials;
    await loginPage.fillUsername('locked_out_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLoginButton();

    // Wait for the error message to appear
    const errorMessageLocator = page.locator('h3[data-test="error"]')
    await expect(errorMessageLocator).toBeVisible()

    // Verify the error message
    const expectedErrorMessage = "Epic sadface: Sorry, this user has been locked out."
    const actualErrorMessage = await errorMessageLocator.textContent()
    await expect(actualErrorMessage).toContain(expectedErrorMessage, 'The error message is not as expected')
  })
})

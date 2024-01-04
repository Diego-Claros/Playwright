import { test, expect } from '@playwright/test'
import LoginPage from '../Pages/login'
import InventoryPage from '../Pages/inventory'
import HeaderPage from '../Pages/header'
import CartPage from '../Pages/cart'
import CheckoutInformationPage from '../Pages/checkoutStepOne'
import CheckoutOverviewPage from '../Pages/checkoutStepTwo'
import CheckoutCompletePage from '../Pages/checkoutComplete'

test.describe('Complete flow for standard user', () => {
  test('Standard User Flow', async ({ page }) => {
    // Initialize page objects
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const headerPage = new HeaderPage(page);
    const cartPage = new CartPage(page);
    const checkoutInformationPage = new CheckoutInformationPage(page);
    const checkoutOverviewPage = new CheckoutOverviewPage(page);
    const checkoutCompletePage = new CheckoutCompletePage(page);

    // Navigate to the login page and login
    await loginPage.goToLoginPage();
    await loginPage.fillUsername('standard_user');
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLoginButton();
    await page.pause();
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

    // Add items to the cart and go to the cart
    await inventoryPage.addBackpackToCart();
    await inventoryPage.addBikeLightToCart();
    await headerPage.goToShoppingCart();
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

    // Proceed to checkout
    await cartPage.proceedToCheckout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

    // Fill checkout information and continue
    //await checkoutInformationPage.fillCheckoutInformation('Test', 'Perez', '123');
    await checkoutInformationPage.fillFirstName('Test');
    await checkoutInformationPage.fillLastName('User');
    await checkoutInformationPage.fillZipCode('12345');
    await checkoutInformationPage.clickContinueButton();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

    // Finish checkout
    await checkoutOverviewPage.finishCheckout();
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');
    await expect(checkoutCompletePage.orderConfirmationMessage).toContainText('Thank you for your order');

    // Return to products and logout
    await checkoutCompletePage.returnToHomePage();
    await headerPage.logout();
  });
});

    import { expect } from '@playwright/test';

    class InventoryPage {
    constructor(page) {
        this.page = page;
        // Replace '#inventory_item_container' with the actual ID of the inventory container on the page
        this.inventoryContainer = page.locator('#inventory_container')
        // Replace '#item_1_title' with the actual ID of a specific inventory item you're interested in
        this.backpack = page.locator('#add-to-cart-sauce-labs-backpack')
        this.bikeLight = page.locator('#add-to-cart-sauce-labs-bike-light')
    }

    async goToInventoryPage() {
        await this.page.goto('https://www.saucedemo.com/inventory.html')
    }

    async verifyInventoryVisible() {
        await expect(this.inventoryContainer).toBeVisible()
    }

    async getFirstItemTitle() {
        return this.backpack.textContent()
    }

    async getFirstItemTitle() {
        return this.bikeLight.textContent()
    }

    async addBackpackToCart() {
        await this.backpack.click();
    }

    async addBikeLightToCart() {
        await this.bikeLight.click();
    }

    }

export default InventoryPage;
/*
// Usage in a test:
import { test } from '@playwright/test';
import InventoryPage from './InventoryPage';

test('inventory page should show items', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  await inventoryPage.goToInventoryPage();
  await inventoryPage.verifyInventoryVisible();
  const title = await inventoryPage.getFirstItemTitle();
  console.log('The title of the first item is:', title);
  // Add your assertions and other test interactions here
});
*/
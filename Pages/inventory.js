    import { expect } from '@playwright/test';

    class InventoryPage {
    constructor(page) {
        this.page = page;
        this.inventoryContainer = page.locator('#inventory_container')
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

import { test, expect } from '@playwright/test';
import { only } from 'node:test';

test('Demo Login Test 1', async ({ page }) => {
    await page.goto('https://demo.applitools.com/');
    await page.pause();

    await page.locator('[placeholder="Enter your username"]').fill('Raghav');
    await page.locator('[placeholder="Enter your password"]').fill('1234');

    await page.waitForSelector('text=Sign in', { timeout: 5000 });
    await page.locator('text=Sign in').click();

});

test('Demo Login Test 2', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.pause();

    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByRole('img', { name: 'profile picture' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
})

test.only('Login demo test 3', async ({ page }) => {
    await page.goto('https://admin-demo.nopcommerce.com/login');
    await page.locator('input[name="Email"]').click();
    await page.locator('input[name="Email"]').press('Control+a');
    await page.locator('input[name="Email"]').fill('admin@yourstore.com');
    await page.locator('input[name="Password"]').click();
    await page.locator('input[name="Password"]').press('Control+a');
    await page.locator('input[name="Password"]').fill('admin');
    await page.locator('text=Log in').click();
    await page.locator('#nopSideBarPusher i').click();
    await page.locator('text=Logout').click();
    await page.waitForURL('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    await page.close();
});


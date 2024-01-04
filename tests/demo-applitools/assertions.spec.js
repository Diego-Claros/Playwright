import test, {page, expect} from '@playwright/test'

test('Assertions Demo', async({page}) => {

    await page.goto('https://kitchen.applitools.com/')
    await page.pause();

    // Check if exactly one element with the text "The Kitchen" exists
    await expect(page.locator('text=The Kitchen')).toHaveCount(1)

    // Check if the element with the text "The Kitchen" is visible
    await expect(page.locator('text=The Kitchen')).toBeVisible()

    // Check if the element with the text "The Kitchen" is hidden
    await expect.soft(page.locator('text=The Kitchen')).toBeHidden()

    // Check if the element with the text "The Kitchen" is enabled
    await expect(page.locator('text=The Kitchen')).toBeEnabled()

    // Check if the element with the text "The Kitchen" is disabled
    await expect.soft(page.locator('text=The Kitchen')).toBeDisabled()

    // Check if the element with the text "The Kitchen" contains the exact text "The Kitchen"
    await expect(page.locator('text=The Kitchen')).toHaveText('The Kitchen')

    // Check if the element with the text "The Kitchen" does not contain the text "ABCD"
    await expect(page.locator('text=The Kitchen')).not.toHaveText('ABCD')

    // Check if the element with the given selector has a specific attribute with a specific value
    await expect.soft(page.locator('text=The Kitchen')).toHaveAttribute('class', '/.*css-dpmy2a/')
    await expect.soft(page.locator('text=The Kitchen')).toHaveClass(/.*css-dpmy2a/)

    // check page url and title
    await expect(page).toHaveURL('https://kitchen.applitools.com/')
    await expect(page).toHaveTitle(/Kitchen/)

    // visual validation with screenshot
    await expect(page).toHaveScreenshot()
})
    

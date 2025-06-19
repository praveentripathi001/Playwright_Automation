const {test, expect} = require ('@playwright/test')

test("Verify Login with valid Credentials", async function({page}){
    await page.goto ("https://opensource-demo.orangehrmlive.com/")
    await page.getByPlaceholder("Username").fill("admin")
    await page.locator("input[name='password']").fill("admin123")    // CSS selector
    await page.locator("//button[@type='submit']").click()  // xpath
    await expect(page).toHaveURL(/dashboard/)
    await page.getByAltText("profile picture").click()
    await page.getByText("Logout").click()
    await expect(page).toHaveURL(/login/)

})
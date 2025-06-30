const {test, expect} = require ('@playwright/test')

test.skip("Verify Login with valid Credentials", async function({page}){
    await page.goto ("https://opensource-demo.orangehrmlive.com/")
    await page.getByPlaceholder("Username").fill("admin")
    await page.locator("input[name='password']").fill("admin123")    // CSS selector
    await page.locator("//button[@type='submit']").click()  // xpath
    await expect(page).toHaveURL(/dashboard/)
    console.log("User is logged in successfully.");
    await page.locator("//img[@class='oxd-userdropdown-img']").click()
    await page.getByText("Logout").click()
   // await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)
    console.log("User is logged out successfully.");
})

test("Verify error message for invalid credentials", async function ({page}){
    await page.goto ("https://opensource-demo.orangehrmlive.com/")
    await page.getByPlaceholder("Username").fill("admin")
    await page.locator("input[name='password']").fill("admin1234")    // CSS selector
    await page.locator("//button[@type='submit']").click()  // xpath
    const errorMessage = await page.locator("//p[contains(@class, 'alert-content-text')]").textContent()
    expect(errorMessage.includes("Invalid")).toBeTruthy()
    expect(errorMessage=="Invalid credentials").toBeTruthy()

    

})
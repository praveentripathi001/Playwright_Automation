const {test, expect} = require('@playwright/test')

test("Verifiy Application Title", async function({page}) {
    await page.goto("https://www.google.com/")
    const url = await page.url()
    console.log("Page URL is: " +url);
    const title = await page.title()
    console.log("Page Title is: "+title);
    await expect(page).toHaveTitle("Google")
    console.log("Title is verified successfully .");
    
    
    

} )
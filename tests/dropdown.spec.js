const{test,expect}=require('@playwright/test')

test("Select single dropdown value", async function dropdown ({page}){
    await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html")
    await page.locator("//span[contains(text(), 'Multiple Choice Dropdown List')]").scrollIntoViewIfNeeded()
    const dropdown = page.locator("//select[@name='country']")
    await dropdown.selectOption("India")
    await page.waitForTimeout(2000)
    await dropdown.selectOption({label: "Aruba"})
    await page.waitForTimeout(2000)
    await dropdown.selectOption({value: "GD"})
    await page.waitForTimeout(2000)
    await dropdown.selectOption({index: 12})
    await page.waitForTimeout(2000)
})

//Print all values of the dropdown
test("Select dropdown value", async function dropdown ({page}){
    await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html")
    await page.locator("//span[contains(text(), 'Multiple Choice Dropdown List')]").scrollIntoViewIfNeeded()
    await page.locator("//select[@name='country']")
    let country = await page.$("//select[@name='country']")
    let allElements = await country.$$("option")
    console.log("Values of Country dropdown: ");
    for (let i=0; i<allElements.length; i++){
        let element = await allElements[i].textContent()
        //let value = await element.textContent()
        console.log(element);  
    }
})

//Traverse the dorpdown to search any specific value.
test("Traverse dorpdown value", async function dropdown ({page}){
    await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html")
    await page.locator("//span[contains(text(), 'Multiple Choice Dropdown List')]").scrollIntoViewIfNeeded()
    await page.locator("//select[@name='country']")
    let country = await page.$("//select[@name='country']")
    let allElements = await country.$$("option")
    console.log("Values of Country dropdown: ");
    let countryStatus=false
    for (let i=0; i<allElements.length; i++){
        let element = await allElements[i].textContent() 
        console.log(element);  
        if (element =="India"){
            countryStatus=true
            break
        }   
    }
    expect(countryStatus).toBeTruthy()
    console.log("Given County name is traversed.");
    
})


test("Select Multiple dropdown values", async function dropdown ({page}){
    await page.goto("https://selenium08.blogspot.com/2019/11/dropdown.html")
    await page.locator("//span[contains(text(), 'To select the multiple-choice options')]").scrollIntoViewIfNeeded()
    const dropdown = page.locator("//select[@name = 'Month']")
    await dropdown.selectOption(
        [
        {label: "January"},
        {label: "February"}
        ])
    await page.waitForTimeout(3000)
})
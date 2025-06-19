const {test, expect} = require ('@playwright/test')

test("My First Test", async function({page}) {
    expect(12).toBe(12)
})

test("My Secind Test", async function ({page}){
    expect(100).toBeGreaterThan(110)
    expect("My Name is Oraveen").toContain("Praveen")
    expect("Praveen Tripathi".includes("Tripathi")).toBeTruthy()
})
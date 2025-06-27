const {test, expect} = require ('@playwright/test')

test("My First Test", async function({page}) {
    expect(12).toBe(12)
})

test("My Second Test", async function ({page}){
    expect(120).toBeGreaterThan(110)
    expect("My Name is Praveen").toContain("Praveen")
    expect("Praveen Tripathi".includes("Tripathi")).toBeTruthy()
})
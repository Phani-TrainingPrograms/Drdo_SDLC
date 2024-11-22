const { element } = require("protractor")
const { delay } = require("q")

//spec.js
describe('ShoppingCart App', () => { 
    beforeEach(()=>{
        browser.get("http://localhost:8080")
    })

    it("Should add item to the cart", async()=>{
        
        const itemInput = element(by.id("item"))
        const quantityInput = element(by.id("quantity"))
        const addButton = element(by.id("addItem"))
        const cartList = element(by.id("cart"))

        await itemInput.sendKeys("Apples")
        browser.sleep(3000)
        await quantityInput.sendKeys("3")
        browser.sleep(3000)
        await addButton.click()
        browser.sleep(3000)

        const items = await cartList.all(by.tagName('li')).getText();
        expect(items).toContain('3 x Apples')
    })
})
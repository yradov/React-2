const rewire = require("rewire")
const SAMPLE_fetch = rewire("./SAMPLE.fetch")
const gerResource = SAMPLE_fetch.__get__("gerResource")
// @ponicode
describe("gerResource", () => {
    test("0", async () => {
        await gerResource("https://api.telegram.org/bot")
    })

    test("1", async () => {
        await gerResource("www.google.com")
    })

    test("2", async () => {
        await gerResource("ponicode.com")
    })

    test("3", async () => {
        await gerResource("http://base.com")
    })

    test("4", async () => {
        await gerResource("https://croplands.org/app/a/confirm?t=")
    })

    test("5", async () => {
        await gerResource(undefined)
    })
})

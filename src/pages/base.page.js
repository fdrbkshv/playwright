class BasePage {
constructor (page) {
this.page = page
this.logo = this.page.locator('.navbar-brand')
}
async open (url) {
    await this.page.goto(url)
    }
}
export { BasePage }
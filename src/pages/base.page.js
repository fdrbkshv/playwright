class BasePage {
constructor (page) {
this.page = page
super(page)
this.logo = this.pagre.locator('.navbar-brand')
}
async open (url) {
    await this.page.goto(url)
    }
}
export { BasePage }
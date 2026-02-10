import { BasePage } from './base.page'

class RegisterPage extends BasePage  {
constructor (page) {
    super(page)
    this.emailField = this.page.getByPlaceholder('Email')
    this.passwordField = this.page.getByPlaceholder('Password')
    this.usernameField = this.page.getByPlaceholder('Your name')
    this.signupButton = this.page.getByRole('button', { name: 'Sign up' });
}
async register (UserName, UserEmail, UserPassword) { // объявляем метод которым можно потом пользоваться в коде
    await this.usernameField.click()
    await this.usernameField.fill(UserName)
    await this.emailField.click()
    await this.emailField.fill(UserEmail)
    await this.passwordField.click()
    await this.passwordField.fill(UserPassword)
    await this.signupButton.click()
    }

}
export { RegisterPage }

// условно говоря в каждой ...Page я могу создать новый класс,
// который будет наследоваться от Base Page
// и наследовать от неё методы, которые в свою очередь смогу 
// вызывать в основном тестовом файле
// а также для каждой отдельной системы(страницы)
// можно будет написать свой код, который будет лежать скрыто и не мешаться перед глазами

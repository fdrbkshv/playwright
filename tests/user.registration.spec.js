import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { url } from 'node:inspector';
import { MainPage, RegisterPage } from '../src/pages/index';
const URL = 'https://realworld.qa.guru/#/register'

// вместо объявления отдельных переменных, мы все данные засунули в объект
  let newUser = {
  UserBio : faker.music.genre(),
  UserName : faker.person.firstName(),
  UserEmail : faker.internet.email(),
  UserPassword : faker.internet.password(),
}

test.describe.only('Reg ', () => {
  
  test('Rega', async ({ page }) => {
const mainPage = new MainPage(page)
const registerPage = new RegisterPage(page)
await mainPage.open(URL)
//await mainPage.register() // без этого работает почему-то
await registerPage.register(newUser.UserName, newUser.UserEmail, newUser.UserPassword)
await expect (page.getByRole('main')).toContainText('Your Feed');
})
  test('Rega alt', async ({ page }) => {
const mainPage = new MainPage(page)
const registerPage = new RegisterPage(page)
await registerPage.open(URL)
await registerPage.register(newUser.UserName, newUser.UserEmail, newUser.UserPassword)
await expect (page.getByRole('main')).toContainText('Your Feed');
})
})




// конструкция которая отображается в худе плейрайта и позволяет работать хотя бы
test('registration2', async ({ page }) => {
  }); 
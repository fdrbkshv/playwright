import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { url } from 'node:inspector';
import { MainPage, RegisterPage } from './src/pages/index';

const URL = 'https://realworld.qa.guru/#/register'


// вместо объявления отдельных переменных, мы все данные засунули в объект
  let newUser = {
  userBio : faker.music.genre(),
  UserName : faker.person.firstName(),
  UserEmail : faker.internet.email(),
  UserPassword : faker.internet.password(),
  'all is ok' : () => {console.log('У вас всё получилось')},
  getText : () => {console.log('Ну пиздец, попали...')}

}
const mainPage = new MainPage(page)
await mainPage.open(url)
await mainPage.register()



test('registration', async ({ page }) => {
  let username = faker.person.firstName();
  let userEmail = faker.internet.email();
  let userPassword = faker.internet.password();

  await page.goto(URL);
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('button', { name: 'Your Feed' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('Your Feed');
});

test.describe.only('Animal', () => {
test('Animal', async ({ page }) => {
class Animals {
  constructor (snakeName, catAge = 5) {
    this.dogName = 'Пися'
    this.catName = 'Кака'
    this.snakeName =snakeName
    this.catAge = catAge
  }
    sayDog() {
      const voice = 'Gav'
      return voice
    }
}
let cat = new Animals("Snake's name")
console.log(cat)
console.log(cat.sayDog)

})
})

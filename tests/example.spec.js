import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { url } from 'node:inspector';
const URL = 'https://realworld.qa.guru/#/register'



/*/ @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
*/
/*
test.only - запускает только этот тест
test.skip - пропускает тест
*/


/*
// вместо объявления отдельных переменных, мы все данные засунули в объект
  let newUser = {
  userBio : faker.music.genre(),
  UserName : faker.person.firstName(),
  UserEmail : faker.internet.email(),
  UserPassword : faker.internet.password(),
  'all is ok' : () => {console.log('У вас всё получилось')},
  getText : () => {console.log('Ну пиздец, попали...')}
}

  newUser[newUser.length]= 'tikva';
  console.log(newUser);

console.log(newUser.getText()) // пример вывода в консоль элемента объекта, но в конце вернет undefined 

console.log(newUser[4]) // пример вывода в консоль элемента объекта, но в конце вернет undefined 


test('signification', async ({ page }) => {
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

*/

test('testBIO', async ({ page }) => {
  let username = faker.person.firstName();
  let userEmail = faker.internet.email();
  let userPassword = faker.internet.password();
  let userBio = faker.music.genre();
  
  await page.goto(URL);

  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill(username);
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(userEmail);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(userPassword);
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.getByText(username).click();
  await page.getByRole('link', { name: ' Profile' }).click();
  await page.getByRole('link', { name: ' Edit Profile Settings' }).click();
  await page.getByRole('textbox', { name: 'URL of profile picture' }).click();
  await page.getByRole('textbox', { name: 'URL of profile picture' }).fill('URLURLURL');
  await page.getByRole('textbox', { name: 'Short bio about you' }).click();
  await page.getByRole('textbox', { name: 'Short bio about you' }).fill(userBio);
  await page.getByRole('button', { name: 'Update Settings' }).click();
  await page.getByRole('link', { name: ' Home' }).click();
  await page.getByText(username).click();
  await page.getByRole('link', { name: ' Profile' }).click();
  await page.getByRole('link', { name: 'Favorited Articles' }).click();
  //await expect(page.getByText(userBio)).toBeVisible();
  await expect(page.getByRole('main')).toContainText(userBio);
})



/*let myFirstArray = ['narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 13, true]
    let i = 0
    while(myFirstArray[i] != true) {
  
  i = i + 1
  console.log(myFirstArray[i])
  }
  console.log(myFirstArray[3]);

*/


/*test.describe.only ('myfirstarray',() => {
  test.beforeEach( async ({ page }) => {
   
    let myFirstArray = ['narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 'narkota', 'love', 'kotiki', 13, true]
    let i = 0
    while(myFirstArray[i] != true) {
  
  i = i + 1
  console.log(myFirstArray[i])
  }
  console.log(myFirstArray['love'])
await page.goto(URL);
}) */



//import { test, expect } from '@playwright/test';
//import { faker } from '@faker-js/faker';
//import { url } from 'node:inspector';
import { BasePage, MainPage, RegisterPage } from '../src/pages/index';
//const URL = 'https://realworld.qa.guru/#/register'


let newUser

test.describe.only('Демо', () => {
  test.beforeEach( async ({ page }) => {
const basePage = new BasePage(page)
const registerPage = new RegisterPage(page)
await basePage.open(URL)
await basePage.register(newUser.userName, newUser.userEmail, newUser.userPassword)
await registerPage.register(newUser.userName, newUser.userEmail, newUser.userPassword)

// вместо объявления отдельных переменных, мы все данные засунули в объект
  newUser = {
  userBio : faker.music.genre(),
  UserName : faker.person.firstName(),
  UserEmail : faker.internet.email(),
  UserPassword : faker.internet.password(),
  'all is ok' : () => {console.log('У вас всё получилось')},
  getText : () => {console.log('Ну пиздец, попали...')}

}
})
})



test('testBIO2', async ({ page }) => {
  
})

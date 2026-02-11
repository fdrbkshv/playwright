import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
//import { MainPage, RegisterPage } from '../src/pages/index';
import { App } from '../src/pages/index';
import { UserBuilder } from "../src/helpers/builders/user.builder";
const URL = 'https://realworld.qa.guru/#/register'
let newUser
let app

test('Allure', async ({ page }) => {
newUser = new UserBuilder().addBio().addEmail().addPassword().addName().generate()
app = new App(page)
await app.basePage.open(URL)
await app.registerPage.register(newUser.UserName, newUser.UserEmail, newUser.UserPassword)
//to do вот эту длинную поеботу сократить до expect и короткий код
await expect (page.getByRole('main')).toContainText('Your Feed');
})
//.  #5CB85C

import { test, expect } from '@playwright/test';
import { url } from 'node:inspector';
import { BasePage } from '../src/pages/index';
const URL = 'https://realworld.qa.guru/#/register'

function convertHexToRgb (hex) {
hex = hex.replace(/^#/, '')
const red = parseInt(hex.substring(0, 2), 16)
const green = parseInt(hex.substring(2, 4), 16)
const blue = parseInt(hex.substring(4, 6), 16)

//вернём объект в котором ргб цвета
return {
  red: red,
  green: green,
  blue: blue,
}
}

async function checkColor(el, cssProps, rgbColors) {
  await expect(el).toHaveCSS(cssProps, `rgb(${rgbColors.red}, ${rgbColors.green}, ${rgbColors.blue})`)
}

test.describe('CSS', () => {
  
  test.only('Проверка цветов', async ({ page }) => {
const basePage = new BasePage(page)
await basePage.open(URL)
let hexColor = '#5cb85c'
let rgbColors = convertHexToRgb(hexColor)
 const logo = await basePage.logo
await checkColor(logo, 'color', rgbColors)

})
})

import { test, expect } from '@playwright/test';

test.describe('API challenge', () => {
    let URL = 'https://apichallenges.eviltester.com/'
test.beforeEach( async ({ request }) => {
    // Запросить ключ авторизации
    let response = await request.post(`${URL}challenges`)
    const headers = await response.headers()
})
test("Получить список заданий get /challenges API", async ({ request }) => {
    let response = await request.get(`${URL}challenges`);
    expect(response.status()).toBe(200)
    /*
    const headers = await response.headers()
    console.log(headers)
    const body = await response.json()
    console.log(body)
    */
  
})
});
import { test, expect } from '@playwright/test';

test.describe('API challenge', () => {
    let URL = 'https://apichallenges.eviltester.com/'
    let token

test.beforeEach( async ({ request }) => {
    // Запросить ключ авторизации
    let response = await request.post(`${URL}challenges`)
    const headers = await response.headers()
    //Пример асcерта
    expect(headers).toEqual(expect.objectContaining({'x-challenger': expect.any(String)}))
    token = headers['x-challenger']
    console.log(headers)
    console.log('снизу должен быть токен')
    console.log(token)
})
test("Получить список заданий get /challenges @API", async ({ request }) => {
    let response = await request.get(`${URL}challenges`, {
        headers: {
            'x-challanger': token,
        }

    });
    const body = await response.json();
    console.log(body)
    const headers = await response.headers()
    console.log(headers)
 expect(headers).toEqual(expect.objectContaining({'x-challenger': token}))
    expect(response.status()).toBe(200)
 
  
}) 
});
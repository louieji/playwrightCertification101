import { test, expect } from '@playwright/test';

test.describe('LambdaTest Simple Form Demo', async () => {

    test('simple form demo', async ({ page }, testInfo) => {

        await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo');
        await expect(page).toHaveURL('https://www.lambdatest.com/selenium-playground/simple-form-demo');
    });
});
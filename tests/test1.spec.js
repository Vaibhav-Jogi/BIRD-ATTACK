import { expect, test } from '@playwright/test';

test('Negative username test', async ({ page }) => {
	test.setTimeout(60000);
	await page.goto('https://practicetestautomation.com/practice-test-login/');
	await page.locator('xpath=//*[@id="username"]').click();
	await page.locator('xpath=//*[@id="username"]').fill('incorrectUser');
	await page.locator('xpath=//*[@id="password"]').click();
	await page.locator('xpath=//*[@id="password"]').fill('Password123');
	await page.locator('xpath=//*[@id="submit"]').click();
    await expect(page.locator('xpath=//div[@id="error"]')).toBeVisible();
    await expect(page.locator('xpath=//div[@id="error"]')).toHaveText('Your username is invalid!');
});

test('load login page', async ({ page }) => {
	test.setTimeout(60000);
	await page.goto('https://practicetestautomation.com/practice-test-login/');
	await page.locator('xpath=//*[@id="username"]').click();
	await page.locator('xpath=//*[@id="username"]').fill('student');
	await page.locator('xpath=//*[@id="password"]').click();
	await page.locator('xpath=//*[@id="password"]').fill('Password123');
	await page.locator('xpath=//*[@id="submit"]').click();
    await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(page.locator('xpath=//div[@class="post-header"]')).toHaveText('Logged In Successfully');
});

import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/login-page.js';
import { loginMessages, loginUsers } from '../test-data/login-data.js';

test('Negative username test', async ({ page }) => {
	const loginPage = new LoginPage(page);

	test.setTimeout(60000);
	await loginPage.open();
	await expect(loginPage.usernameInput).toBeVisible();
	await loginPage.login(loginUsers.invalid.username, loginUsers.invalid.password);
	await loginPage.expectError(loginMessages.invalidUsername);
});

test('load login page', async ({ page }) => {
	const loginPage = new LoginPage(page);

	test.setTimeout(60000);
	await loginPage.open();
	await expect(loginPage.usernameInput).toBeVisible();
	await loginPage.login(loginUsers.valid.username, loginUsers.valid.password);
	await loginPage.expectLoggedIn();
});

test.only('test 3', async ({ page }) => {
test.setTimeout(60000);
await page.goto('https://gmail.com//');
await page.locator('//*[@id="identifierId"]').fill('testing.gmail.com');
});

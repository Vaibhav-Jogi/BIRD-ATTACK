import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('xpath=//*[@id="username"]');
    this.passwordInput = page.locator('xpath=//*[@id="password"]');
    this.submitButton = page.locator('xpath=//*[@id="submit"]');
    this.errorMessage = page.locator('xpath=//div[@id="error"]');
    this.successHeader = page.locator('xpath=//div[@class="post-header"]');
  }

  async open() {
    await this.page.goto('https://practicetestautomation.com/practice-test-login/');
  }

  async login(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async expectError(message) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toHaveText(message);
  }

  async expectLoggedIn() {
    await expect(this.page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/');
    await expect(this.successHeader).toHaveText('Logged In Successfully');
  }
}
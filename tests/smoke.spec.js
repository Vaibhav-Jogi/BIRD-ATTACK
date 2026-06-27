import { expect, test } from '@playwright/test';
import { PracticePage } from '../pages/practice-page.js';

test('practice starter: local form flow', async ({ page }) => {
  const practicePage = new PracticePage(page);

  await practicePage.load();
  await expect(page.getByRole('heading', { name: 'Practice Dashboard' })).toBeVisible();
  await practicePage.expectReady();
  await practicePage.fillTask('Open a practice website');
  await practicePage.saveTask();
  await practicePage.expectSavedTask('Open a practice website');
});
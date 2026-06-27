import { expect } from '@playwright/test';

export class PracticePage {
  constructor(page) {
    this.page = page;
    this.taskInput = page.getByLabel('Task');
    this.saveButton = page.getByRole('button', { name: 'Save task' });
    this.statusMessage = page.getByTestId('status');
  }

  async load() {
    await this.page.setContent(`
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>BIRD-actack Practice Page</title>
        </head>
        <body>
          <main>
            <h1>Practice Dashboard</h1>
            <label for="task">Task</label>
            <input id="task" name="task" type="text" />
            <button id="save" type="button">Save task</button>
            <p id="status" data-testid="status">Waiting</p>
          </main>
          <script>
            const taskInput = document.getElementById('task');
            const saveButton = document.getElementById('save');
            const status = document.getElementById('status');

            saveButton.addEventListener('click', () => {
              status.textContent = 'Saved: ' + taskInput.value;
            });
          </script>
        </body>
      </html>
    `);
  }

  async expectReady() {
    await expect(this.page.getByRole('heading', { name: 'Practice Dashboard' })).toBeVisible();
  }

  async fillTask(value) {
    await this.taskInput.fill(value);
  }

  async saveTask() {
    await this.saveButton.click();
  }

  async expectSavedTask(value) {
    await expect(this.statusMessage).toHaveText(`Saved: ${value}`);
  }
}
# BIRD-actack

Playwright automation practice project in JavaScript.

## Setup

1. Install dependencies with `npm install`.
2. Install browser binaries with `npm run test:install`.
3. Copy `.env.example` to `.env` and set `BASE_URL` if you want to test a different site.

## Scripts

- `npm test` runs Playwright headless.
- `npm run test:headed` runs in a visible browser.
- `npm run test:debug` opens Playwright debug mode.
- `npm run test:report` opens the HTML report.
- `npm run lint` checks the JavaScript files.
- `npm run format:fix` formats the repository with Prettier.

## Project Layout

- `playwright.config.js` contains the test runner defaults.
- `tests/` contains starter practice specs.
- `.env` stores local target site settings and stays untracked.
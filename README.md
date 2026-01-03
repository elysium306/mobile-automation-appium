# Mobile Automation (Appium + WebdriverIO)

## Purpose

A reference mobile automation framework using WebdriverIO with Appium to run
cross-platform tests on Android and iOS. This repo demonstrates practical
test organization (page objects + specs), environment configuration, and
reporting outputs commonly used in CI pipelines.

## Tech Stack

-   JavaScript (Node.js)
-   WebdriverIO (WDIO)
-   Appium
-   Android + iOS
-   Allure reporting (outputs)

## Project Structure

-   `app/` — platform-specific app assets and structure (Android/iOS)
-   `config/` — WDIO configs for Android, iOS, and shared settings
-   `test/pageobjects/` — page object abstractions
-   `test/specs/` — test specs organized by platform
-   `allure-results/` — generated test results (ignored by git)

## How to Run (Local)

1. Install dependencies:

```bash
npm ci
```

2. Run Android tests (example):

```bash
npx wdio config/wdio.android.conf.js
```

3. Run iOS tests (example):

```bash
npx wdio config/wdio.ios.conf.js
```

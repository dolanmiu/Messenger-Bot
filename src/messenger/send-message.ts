import puppeteer, { PuppeteerLaunchOptions } from "puppeteer";

import { closeCookieDialog, delay, login, logout, sendText } from "./util";

export const sendMessage = async ({
  email,
  password,
  chatId,
  message,
  puppeteerArgs,
}: {
  readonly email: string;
  readonly password: string;
  readonly chatId: string;
  readonly message: string;
  readonly puppeteerArgs: PuppeteerLaunchOptions;
}): Promise<void> => {
  const browser = await puppeteer.launch(puppeteerArgs);
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(0);
  page.setDefaultTimeout(0);

  await page.goto("https://messenger.com");
  await closeCookieDialog(page);
  await login(page, email, password);
  await retry(async () => {
    await page.goto(`https://www.messenger.com/t/${chatId}`, {
      timeout: 1000 * 60 * 15,
    });
  });
  await sendText(page, message);
  await delay(5000);
  await logout(page);
  await delay(5000);
  await browser.close();
};

const retry = async (
  fn: () => Promise<void>,
  retriesLeft = 5
): Promise<void> => {
  try {
    await fn();
  } catch (error) {
    if (retriesLeft) {
      await delay(5000);
      await retry(fn, retriesLeft - 1);
    } else {
      throw error;
    }
  }
};

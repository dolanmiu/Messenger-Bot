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

  await page.goto("https://messenger.com");
  await closeCookieDialog(page);
  await login(page, email, password);
  await page.goto(`https://www.messenger.com/t/${chatId}`);
  await sendText(page, message);
  await delay(5000);
  await logout(page);
  await delay(5000);
  await browser.close();
};

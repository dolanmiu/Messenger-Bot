import { Page } from "puppeteer";

export const escapeXpathString = (str: string) => {
  const splitQuotes = str.replace(/'/g, `', "'", '`);
  return `concat('${splitQuotes}', '')`;
};

export const clickByText = async (page: Page, text: string): Promise<void> => {
  const escapedText = escapeXpathString(text);
  const linkHandlers = await page.$x(`//span[contains(., '${text}')]`);
  if (linkHandlers.length > 0) {
    await (linkHandlers as any)[0].click();
  } else {
    throw new Error(`Link not found: ${text}`);
  }
};

export const delay = (time: number): Promise<void> => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

export const logout = async (page: Page): Promise<void> => {
  const settingsIconSelector = `[aria-label="Settings, help and more"]`;
  await page.waitForSelector(settingsIconSelector);
  await page.click(settingsIconSelector);

  await clickByText(page, `Log Out`);
  await page.waitForNavigation({ waitUntil: "load" });
};

export const closeCookieDialog = async (page: Page): Promise<void> => {
  const allResultsSelector = `[data-testid="cookie-policy-manage-dialog-accept-button"]`;
  await page.waitForSelector(allResultsSelector);
  await page.click(allResultsSelector);
};

export const sendText = async (page: Page, message: string): Promise<void> => {
  const textBoxSelector = `[role="textbox"]`;
  await page.waitForSelector(textBoxSelector);
  await page.type(textBoxSelector, message);
  await page.keyboard.press("Enter");
};

export const login = async (
  page: Page,
  email: string,
  password: string
): Promise<void> => {
  await page.type("#email", email);
  await page.type("#pass", password);
  await page.keyboard.press("Enter");
  await page.waitForNavigation({ waitUntil: "load" });
};

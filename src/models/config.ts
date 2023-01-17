import { PuppeteerLaunchOptions } from "puppeteer";

export interface Config {
  readonly events: readonly Event[];
  readonly puppeteerArgs: PuppeteerLaunchOptions;
}

export interface Event {
  name: string;
  cron: string;
  message: string;
}

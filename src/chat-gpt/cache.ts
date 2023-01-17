import { CronJob } from "cron";
import { Environment } from "../models";
import { variateMessage } from "./variate-message";

const cache = new Map<string, string | null>();
const ENV_VARS: Environment = process.env as Environment;

export const getCache = (key: string): string => {
  const value = cache.get(key);

  if (cache.has(key)) {
    cache.delete(key);
  }

  return value ?? key;
};

export const setCacheItem = (message: string): void => {
  cache.set(message, null);
};

export const startCacheJob = (timeZone: string): void => {
  const job = new CronJob(
    // "*/10 * * * *",
    "1 21 * * *",
    async () => {
      console.log("Talking to ChatGPT");

      for (const [key, value] of cache.entries()) {
        if (value === null) {
          const response = await variateMessage({
            email: ENV_VARS.CHAT_GPT_EMAIL_ADDRESS,
            password: ENV_VARS.CHAT_GPT_PASSWORD,
            message: key,
          });

          cache.set(key, response);
          return;
        }
      }

      console.log("Job finished");
    },
    null,
    false,
    timeZone
  );

  job.start();
};

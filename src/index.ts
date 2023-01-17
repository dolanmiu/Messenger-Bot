// https://crontab.guru/ to generate cron expression
import dotenv from "dotenv";
import { CronJob } from "cron";

import { getCache, setCacheItem } from "./chat-gpt";
import { sendMessage } from "./messenger";
import { Environment } from "./models";
import config from "./config.json";

dotenv.config();

const ENV_VARS: Environment = process.env as Environment;

for (const { events, chatId } of config.chats) {
  console.log("Loading events for:", chatId);

  for (const { name, cron, message, useChatGpt } of events) {
    console.log("Scheduling job:", name, cron);

    const job = new CronJob(
      cron,
      async () => {
        console.log("Job running:", name);

        await sendMessage({
          email: ENV_VARS.MESSENGER_EMAIL_ADDRESS,
          password: ENV_VARS.MESSENGER_PASSWORD,
          chatId,
          message: useChatGpt ? getCache(message) : message,
          puppeteerArgs: config.puppeteerArgs,
        });

        console.log("Job finished");
      },
      null,
      false,
      config.timeZone
    );

    setCacheItem(message);
    job.start();
  }
}

// startCacheJob(config.timeZone);

console.log("Jobs started");

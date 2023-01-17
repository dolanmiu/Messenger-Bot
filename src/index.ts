// https://crontab.guru/ to generate cron expression
import dotenv from "dotenv";
import { CronJob } from "cron";
import { sendMessage } from "./messenger";
import { Environment } from "./models";

import config from "./config.json";

dotenv.config();

const ENV_VARS: Environment = process.env as Environment;

for (const { cron, message, name } of config.events) {
  console.log("Scheduling job: ", name, cron);
  const job = new CronJob(
    cron,
    async () => {
      console.log("Job running: ", name);

      await sendMessage({
        email: ENV_VARS.MESSENGER_EMAIL_ADDRESS,
        password: ENV_VARS.MESSENGER_PASSWORD,
        chatId: ENV_VARS.MESSENGER_CHAT_ID,
        message: message,
      });

      console.log("Job finished");
    },
    null,
    false,
    "Europe/London"
  );

  job.start();
}

console.log("Jobs started");

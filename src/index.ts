// https://crontab.guru/ to generate cron expression
import * as dotenv from "dotenv";
import { CronJob } from "cron";
import { sendMessage } from "./messenger";
import { Environment } from "./models";

dotenv.config();

const ENV_VARS: Environment = process.env as Environment;

const job = new CronJob(
  // "10 9 * * *",
  // "* * * * * *",
  "28 17 * * *",
  async () => {
    console.log("Job running");

    await sendMessage({
      email: ENV_VARS.MESSENGER_EMAIL_ADDRESS,
      password: ENV_VARS.MESSENGER_PASSWORD,
      chatId: ENV_VARS.MESSENGER_CHAT_ID,
      message: "Automated cron message",
    });

    console.log("Job finished");
  },
  null,
  false,
  "Europe/London"
);

job.start();
console.log("Job started");

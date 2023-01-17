# Messenger Bot

> Send and automate messages to people on Facebook Messenger without having to use the Facebook Messenger app.

It uses Puppeteer to automate the process of sending messages to people on Facebook Messenger. It uses a **cron job** to send messages at a specified time.

### Potential use cases for inspiration

#### Current support

1. Never forget to send `Good Morning!` and `Good Night!` messeages to your loved ones ever again! - **Affection At Scale™**
2. Send weekly reminders to people. E.g. To take out the trash
3. Send a message to yourself to remind yourself tasks

#### If you fork and extend it

1. Send a word of the day to people using: https://www.apis4librarians.com/wordnik/word-of-the-day
2. Send motivational quotes to people using: https://zenquotes.io/
3. Send Google Calendar event reminders to people

## Prerequisites

#### Turn off Two-Factor Authentication for Facebook

**Why -** Because otherwise the server cannot authenticate
Future versions may include a way to persist the session, but for now, 2FA must remain disabled

## Installation

```sh
$ npm install
```

### Set ENV variables and config

```sh
$ cp .env.example .env
```

```sh
$ cp src/config.json.example src/config.json
```

#### What ENV variables mean

| Variable                | Description                 |
| ----------------------- | --------------------------- |
| MESSENGER_EMAIL_ADDRESS | Your Facebook email address |
| MESSENGER_PASSWORD      | Your Facebook password      |

#### What config.json means

| Variable      | Description                                                                                      |
| ------------- | ------------------------------------------------------------------------------------------------ |
| chats         | An array of chats you want to send messages to. Each chat has a `chatId` and a `messages` array. |
| puppeteerArgs | Arguments to pass to Puppeteer. See official docs for more info.                                 |

##### Chat object

| Variable | Description                                                                                                                                                                                                                                                      |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| chatId   | The ID of the person you want to send the message to. You can get this by going to the person's profile and copying the number at the end of the URL. For example, if the URL is `https://www.facebook.com/messages/t/12345678`, then the chat ID is `12345678`. |
| events   | An array of events you want to send messages to.                                                                                                                                                                                                                 |

##### Event object

| Variable   | Description                                                                                         |
| ---------- | --------------------------------------------------------------------------------------------------- |
| name       | The name of the event.                                                                              |
| cron       | The cron expression for when you want to send the message. See https://crontab.guru/ for more info. |
| message    | The message you want to send.                                                                       |
| useChatGpt | `Experimental` Whether to use the chat GPT-3 model to generate the message.                         |

## Usage

```sh
$ npm start
```

Made with :heart: by Dolan Miu

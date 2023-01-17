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

| Variable                | Description                                                                                                                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MESSENGER_EMAIL_ADDRESS | Your Facebook email address                                                                                                                                                                                                                                      |
| MESSENGER_PASSWORD      | Your Facebook password                                                                                                                                                                                                                                           |
| MESSENGER_CHAT_ID       | The ID of the person you want to send the message to. You can get this by going to the person's profile and copying the number at the end of the URL. For example, if the URL is `https://www.facebook.com/messages/t/12345678`, then the chat ID is `12345678`. |

## Usage

```sh
$ npm start
```

Made with :heart: by Dolan Miu

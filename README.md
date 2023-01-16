# Messenger Bot

> Send and automate messages to people on Facebook Messenger without having to use the Facebook Messenger app.

It uses Puppeteer to automate the process of sending messages to people on Facebook Messenger. It uses a cron job to send messages at a specified time.

## Installation

```sh
$ npm install
```

### Set ENV variables

```sh
$ cp .env.example .env
```

#### What ENV variables mean

<!-- Create Table here -->

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

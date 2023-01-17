export interface Environment extends NodeJS.ProcessEnv {
  readonly MESSENGER_EMAIL_ADDRESS: string;
  readonly MESSENGER_PASSWORD: string;
  readonly CHAT_GPT_EMAIL_ADDRESS: string;
  readonly CHAT_GPT_PASSWORD: string;
}

export interface Environment extends NodeJS.ProcessEnv {
  readonly MESSENGER_EMAIL_ADDRESS: string;
  readonly MESSENGER_PASSWORD: string;
  readonly MESSENGER_CHAT_ID: string;
}

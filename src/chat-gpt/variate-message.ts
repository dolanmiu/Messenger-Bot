export const variateMessage = async ({
  email,
  password,
  message,
}: {
  readonly email: string;
  readonly password: string;
  readonly message: string;
}): Promise<string> => {
  const { ChatGPTAPI, getOpenAIAuth, ChatGPTAPIBrowser } = await import(
    "chatgpt"
  );
  const api = new ChatGPTAPIBrowser({
    email,
    password,
  });

  console.log("Logging in to ChatGPT");

  await api.initSession();

  console.log("Logged in to ChatGPT");

  const result = await api.sendMessage(
    `Write a message which is similar to: ${message}`,
    {
      timeoutMs: 10 * 60 * 1000,
    }
  );

  console.log("Sent message to ChatGPT");

  return result.response;
};

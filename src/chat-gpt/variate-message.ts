export const variateMessage = async ({
  email,
  password,
  message,
}: {
  readonly email: string;
  readonly password: string;
  readonly message: string;
}) => {
  //   const gpt = await require("chatgpt");
  const gpt = require("fix-esm").require("chatgpt");
  const api = new gpt.ChatGPTAPIBrowser({
    email,
    password,
  });

  await api.initSession();

  const result = await api.sendMessage(
    `Write a message which is similar to: ${message}`
  );

  return result.response;
};

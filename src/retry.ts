export const retryFunctionOnError = async (
  fn: () => Promise<void>,
  retries: number,
  delay: number
): Promise<void> => {
  let error: Error | null | unknown = null;
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err) {
      error = err;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw error;
};

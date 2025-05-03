import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "my-app",
  name: "My App",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});

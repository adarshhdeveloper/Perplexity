import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const model = new ChatGoogleGenerativeAI({
  model: "gemini-2.5-flash-lite",
  apiKey: process.env.GEMINI_API_KEY,
});

export const testAi = async () => {
  await model.invoke("who are you  ?").then((response) => {
    console.log(response.text); 
  });
}
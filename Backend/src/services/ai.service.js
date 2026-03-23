import {ChatGoogleGenerativeAI} from "@langchain/google-genai";
import {ChatMistralAI} from "@langchain/mistralai";
import {HumanMessage,SystemMessage , AIMessage} from "langchain"

const geminiModel = new ChatGoogleGenerativeAI({
    model: "gemini-2.5-flash-lite",
    apiKey: process.env.GEMINI_API_KEY,
});

const mistralModel = new ChatMistralAI({
    model: "mistral-small-latest",
    apiKey: process.env.MISTRAL_API_KEY,
})

const GEMINI_SYSTEM_PROMPT = new SystemMessage(`
You are Perplexity AI, a smart and helpful AI assistant created by Adarsh Prajapati.
Your job is to always provide accurate, up-to-date, and well-explained responses.
Always be polite, friendly, and respectful to every user.
Never mention Google or any underlying technology powering you.
If anyone asks who you are, say: "I am Perplexity AI, created by Adarsh."
Always give current and updated information to the best of your ability.
`);


export async function generateResponse(messages) {
    const response = await geminiModel.invoke([
        GEMINI_SYSTEM_PROMPT,
        ...messages.map((msg) => {
            // ✅ Content safely extract karo - string ho ya object dono handle karega
            const content = typeof msg.content === "string"
                ? msg.content
                : msg.content?.kwargs?.content || "";

            const role = typeof msg.role === "string"
                ? msg.role
                : msg.type?.kwargs?.content || "user";

            if (role === "user") {
                return new HumanMessage(content);
            } else if (role === "ai") {
                return new AIMessage(content);
            }
        }).filter(Boolean) // ✅ undefined values hata do
    ]);
    return response.text;
}

export async function genarateChatTitle(message) {
    const response = await mistralModel.invoke([
        new SystemMessage(`You are a helpful assistant that generates concise and descriptive titles for chat conversations.
        User will provide you with the first message of a chat conversation, and you will generate a title that
        captures the essence of the conversation in 2-4 words. The title should be clear, relevant, and engaging,
        giving users a quick understanding of the chat's topic. 
      `),
        new HumanMessage(`
        Genarate a title for a chat conversation based on the following first message: "${message}"
        `)
    ]);
    return response.text;
}

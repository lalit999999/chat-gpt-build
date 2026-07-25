import { openai } from "@ai-sdk/openai";

export const DEFAULT_CHAT_MODEL = "gpt-4o-mini";

export function getChatmodel(modelid?: string | null

) {
    return openai(modelid ?? DEFAULT_CHAT_MODEL)
}

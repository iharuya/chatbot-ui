import { LLM } from "@/types"

const GOOGLE_PLATORM_LINK = "https://ai.google.dev/"

// Google Models (UPDATED 12/22/23) -----------------------------

// Gemini Pro (UPDATED 12/22/23)
const GEMINI_PRO: LLM = {
	modelId: "gemini-1.5-pro",
	modelName: "Gemini Pro",
	provider: "google",
	hostedId: "gemini-1.5-pro",
	platformLink: GOOGLE_PLATORM_LINK,
	imageInput: true
}

const GEMINI_FLASH: LLM = {
	modelId: "gemini-1.5-flash",
	modelName: "Gemini Flash",
	provider: "google",
	hostedId: "gemini-1.5-flash",
	platformLink: GOOGLE_PLATORM_LINK,
	imageInput: true
}

export const GOOGLE_LLM_LIST: LLM[] = [GEMINI_PRO, GEMINI_FLASH]

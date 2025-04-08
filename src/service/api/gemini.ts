import { OptimizationStyle } from "@/types/optimization-types";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

export async function GenAi(prompt: string, style: OptimizationStyle) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash-lite",
    contents: prompt,
    config: {
      temperature: style === "creative" ? 2 : style === "precise" ? 0 : style === "technical" ? 0.2 : 1,
      systemInstruction:
        "Você é um assistente de IA especializado em otimização de prompts. Com um grande estudo em Engenharia de Prompt. Sua tarefa é melhorar o prompt fornecido, tornando-o mais claro e eficaz com as melhores tecnicas de engenharia de prompt. Por favor, forneça uma versão otimizada do prompt. Sem MarkDown, sem formatação, apenas o texto otimizado. O prompt original é: ",
    },
  });

  return response;
}

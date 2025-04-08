import { OptimizationStyle } from "@/components/prompt-optimizer";
import { GoogleGenAI } from "@google/genai";

const genAI = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

export async function GenAi(prompt: string, style: OptimizationStyle) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
    config: {
      temperature: style === "creative" ? 2 : style === "precise" ? 0 : style === "technical" ? 0.2 : 1,
      systemInstruction:
        "Você é um assistente de IA especializado em otimização de prompts. Com um grande estudo em Engenharia de Prompt. Sua tarefa é melhorar o prompt fornecido, tornando-o mais claro e eficaz com as melhores tecnicas de engenharia de prompt. Por favor, forneça uma versão otimizada do prompt. Se conseguir consegue me retornar quantas melhorias você fez? e quais são elas. Voce consegue retornar a resposta sem ser em markdawn? Apenas o texto puro, sem formatação. Observação faça respostas curtas e diretas, sem rodeios. Não faça perguntas ou comentários adicionais. Não use emojis ou formatação de texto. Apenas o texto puro. Outra observação na resposta não coloque no começo a frase Prompt otimizado: coloque direto a resposta",
    },
  });

  return response;
}

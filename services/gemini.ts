import { GoogleGenAI } from "@google/genai";

// Function to generate an image based on a prompt
// This runs on the server-side (node context) within the API route
export const generateImageFromPrompt = async (prompt: string): Promise<string> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY is not defined in environment variables");
  }

  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          { text: prompt }
        ]
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9",
          numberOfImages: 1
        }
      }
    });

    // Extract the base64 image data
    let base64Image: string | null = null;
    
    if (response.candidates && response.candidates[0].content && response.candidates[0].content.parts) {
      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData && part.inlineData.data) {
          base64Image = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
          break;
        }
      }
    }

    if (!base64Image) {
      throw new Error("No image data found in Gemini response");
    }

    return base64Image;

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
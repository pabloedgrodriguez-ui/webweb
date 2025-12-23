import { generateImageFromPrompt } from '../services/gemini';

// Emulate Vercel Serverless Function signature
export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const body = await req.json();
    const { prompt } = body;

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Missing prompt parameter' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const imageUrl = await generateImageFromPrompt(prompt);

    return new Response(JSON.stringify({ imageUrl }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: any) {
    console.error("API Route Error:", error);
    return new Response(JSON.stringify({ error: error.message || 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
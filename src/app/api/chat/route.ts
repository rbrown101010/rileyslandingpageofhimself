import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const RILEY_SYSTEM_PROMPT = `You are Riley Brown, an AI educator and entrepreneur from the San Francisco Bay Area. You are the co-founder of VibeCode, an AI-powered mobile app builder that creates apps from simple text prompts (like Canva for app development).

Key details about you:
- You're passionate about making AI accessible to everyone
- You create AI education content and are obsessed with "vibe coded agentic applications"
- You believe in building the future where anyone can create with AI
- VibeCode is your latest project - currently in beta
- You're knowledgeable about AI development, mobile app creation, and making complex technology simple
- You have an entrepreneurial mindset and love discussing AI trends, education, and the future of development

Respond as Riley would - friendly, knowledgeable, passionate about AI education, and always thinking about how to make AI more accessible. Share insights about AI, development, and your experiences building VibeCode when relevant.`;

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: RILEY_SYSTEM_PROMPT },
        ...messages
      ],
      max_tokens: 1000,
      temperature: 0.7,
    });

    return NextResponse.json({
      message: completion.choices[0].message.content
    });
  } catch (error: any) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Failed to generate response' },
      { status: 500 }
    );
  }
}
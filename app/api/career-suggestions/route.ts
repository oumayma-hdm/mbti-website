import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  if (!process.env.HUGGINGFACE_API_KEY) {
    return NextResponse.json(
      { error: 'API key not configured' },
      { status: 500 }
    );
  }

  try {
    const { mbtiType } = await request.json();

    if (!mbtiType) {
      return NextResponse.json(
        { error: 'MBTI type is required' },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://api-inference.huggingface.co/models/google/flan-t5-xl",
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          inputs: `Generate 5 career recommendations for MBTI type ${mbtiType}. Output only job titles separated by commas.`
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch from HuggingFace API');
    }

    const data = await response.json();
    console.log('API Response:', data);

    const careers = data[0].generated_text
      .split(',')
      .map((career: string) => career.trim())
      .filter((career: string) => career.length > 0)
      .slice(0, 5);

    return NextResponse.json({ careers });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get career suggestions' },
      { status: 500 }
    );
  }
}
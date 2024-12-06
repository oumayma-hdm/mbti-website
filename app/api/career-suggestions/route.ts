import { NextResponse } from 'next/server';
import { mbtiCareers } from '../../services/mbtiCareers';

export async function POST(request: Request) {
  try {
    const { mbtiType } = await request.json();

    if (!mbtiType) {
      return NextResponse.json(
        { error: 'MBTI type is required' },
        { status: 400 }
      );
    }

    const careers = mbtiCareers[mbtiType as keyof typeof mbtiCareers];

    if (!careers) {
      return NextResponse.json(
        { error: 'No careers found for this MBTI type' },
        { status: 404 }
      );
    }

    return NextResponse.json({ careers });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to get career suggestions' },
      { status: 500 }
    );
  }
}
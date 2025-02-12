// src/app/api/route/route.ts

import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { title, author, content, genre } = await request.json();

    // Input validation
    if (!title || title.length < 3) {
      return NextResponse.json(
        { message: 'Title is required and must be at least 3 characters long' },
        { status: 400 }
      );
    }
    if (!author || author.length < 3) {
      return NextResponse.json(
        { message: 'Author is required and must be at least 3 characters long' },
        { status: 400 }
      );
    }
    if (!content || content.length < 10) {
      return NextResponse.json(
        { message: 'Content is required and must be at least 10 characters long' },
        { status: 400 }
      );
    }
  if (!genre || genre.length < 3) {
    return NextResponse.json(
      { message: 'Genre is required and must be at least 3 characters long' },
      { status: 400 }
    );
  }

    // Create a new document in Sanity
    const result = await client.create({
      _type: 'novel',
      title,
      author,
      content,
      genre,
    });

    return NextResponse.json(
      { message: 'Novel submitted successfully!', result },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error submitting novel:', error);
    return NextResponse.json(
      { message: 'Failed to submit novel', error: error.message },
      { status: 500 }
    );
  }
}

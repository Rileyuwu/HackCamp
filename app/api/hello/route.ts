import { NextResponse } from 'next/server';

// This is an example API route
// GET /api/hello
export async function GET() {
  return NextResponse.json({ 
    message: 'Hello from Next.js API!',
    timestamp: new Date().toISOString(),
  });
}

// POST /api/hello
export async function POST(request: Request) {
  const body = await request.json();
  
  return NextResponse.json({ 
    message: 'Data received!',
    received: body,
  });
}


import { NextResponse } from 'next/server';

// Simple authentication - in production, use proper authentication
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    // Verify credentials
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Create a simple token (in production, use JWT or similar)
      const token = Buffer.from(`${username}:${Date.now()}`).toString('base64');

      const response = NextResponse.json({ status: 200, success: true });

      // Set cookie with token
      response.headers.append(
        'Set-Cookie',
        `auth=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
      );

      return response;
    }

    return NextResponse.json(
      { error: 'Niepoprawne dane logowania' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Błąd logowania' },
      { status: 500 }
    );
  }
}

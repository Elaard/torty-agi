import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  const authCookie = req.cookies.get('auth');

  if (!authCookie?.value) {
    return NextResponse.redirect(new URL('/logowanie', req.url));
  }
  const token = jwt.decode(authCookie?.value) as any;

  const currentTime = Math.floor(Date.now() / 1000);
  if (token.exp < currentTime) {
    return NextResponse.redirect(new URL('/logowanie', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/panel-admina',
};

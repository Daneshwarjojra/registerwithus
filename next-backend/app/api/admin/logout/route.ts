import { NextResponse } from 'next/server';

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Remove the auth cookie
  response.cookies.set('admin_auth', '', {
    httpOnly: true,
    path: '/',
    maxAge: 0
  });

  return response;
}

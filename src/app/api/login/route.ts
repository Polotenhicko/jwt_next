import { COOKIE_SETTINGS } from '@/lib/utils/constants';
import { AuthService } from '@/services/AuthService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const requestJson = await request.json();

  const { email, password } = requestJson as { email: string; password: string };
  const { accessToken, refreshToken, accessTokenExpiration } = await AuthService.signUp({
    email,
    password,
  });

  cookies().set('refreshToken', refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);
  return NextResponse.json({ accessToken, accessTokenExpiration });
}

import { COOKIE_SETTINGS } from '@/lib/utils/constants';
import { ServerAuthService } from '@/services/server/ServerAuthService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const requestJson = await request.json();

  const { email, password } = requestJson as { email: string; password: string };
  const { accessToken, refreshToken, accessTokenExpiration } =
    await ServerAuthService.signUp({
      email,
      password,
    });

  cookies().set('refreshToken', refreshToken, COOKIE_SETTINGS.REFRESH_TOKEN);

  return NextResponse.json({ accessToken, accessTokenExpiration });
}

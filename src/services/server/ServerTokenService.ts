import jwt from 'jsonwebtoken';

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || '';
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || '';

// По идее используется чтобы на бэке создать токен, так что наверно надо вынести на бэк
export class ServerTokenService {
  public static async generateAccessToken(payload: any) {
    return await jwt.sign(payload, ACCESS_TOKEN_SECRET, {
      expiresIn: '30m',
    });
  }

  public static async generateRefreshToken(payload: any) {
    return await jwt.sign(payload, REFRESH_TOKEN_SECRET, {
      expiresIn: '15d',
    });
  }
}

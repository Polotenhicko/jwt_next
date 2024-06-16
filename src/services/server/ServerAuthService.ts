import { ACCESS_TOKEN_EXPRIRATION } from '@/lib/utils/constants';
import { ServerTokenService } from './ServerTokenService';

interface ISignUp {
  email: string;
  password: string;
}

// Серверный сервис
export class ServerAuthService {
  static async signUp({ email, password }: ISignUp) {
    /*
      Проверка на существование пользователя
      Либо создаём нового, и при этом хешируем пароль
    */

    const id = `${Math.random()}.${Date.now()}`;

    const payload = { id, email };

    const accessToken = await ServerTokenService.generateAccessToken(payload);
    const refreshToken = await ServerTokenService.generateRefreshToken(payload);

    /*
      Добавляем в бд рефреш токен по айди пользователю
    */

    return {
      accessToken,
      refreshToken,
      accessTokenExpiration: ACCESS_TOKEN_EXPRIRATION,
    };
  }
}

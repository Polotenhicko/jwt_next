import { ACCESS_TOKEN_EXPRIRATION } from '@/lib/utils/constants';
import { TokenService } from './TokenService';

interface ISignUp {
  email: string;
  password: string;
}

export class AuthService {
  static async signUp({ email, password }: ISignUp) {
    /*
      Проверка на существование пользователя
      Либо создаём нового, и при этом хешируем пароль
    */

    const id = `${Math.random()}.${Date.now()}`;

    const payload = { id, email };

    const accessToken = await TokenService.generateAccessToken(payload);
    const refreshToken = await TokenService.generateRefreshToken(payload);

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

import { FetchService } from './FetchService';
import inMemoryJWTService from './TokenService';

// TODO: вынести интерфейсы
interface ISignUpPayload {
  email: string;
  password: string;
}

// TODO: Токен устанавливается на бэке, подумать куда закинуть интерфейс
interface ITokenResponse {
  accessToken: string;
  accessTokenExpiration: number;
}

class AuthService {
  public async signUp({ email, password }: ISignUpPayload): Promise<boolean> {
    const request = new FetchService({
      path: '/api/sign-up',
      body: {
        email,
        password,
      },
      method: 'POST',
      needCredentials: true,
    });

    const response = await request.fetch<ITokenResponse>();

    inMemoryJWTService.setToken(response.accessToken, response.accessTokenExpiration);
    console.log(inMemoryJWTService.getToken());

    return true;
  }

  public async signIn({ email, password }: ISignUpPayload): Promise<boolean> {
    const request = new FetchService({
      path: '/api/sign-in',
      body: {
        email,
        password,
      },
      method: 'POST',
    });

    const response = await request.fetch<ITokenResponse>();

    inMemoryJWTService.setToken(response.accessToken, response.accessTokenExpiration);

    return true;
  }
}

export default new AuthService();

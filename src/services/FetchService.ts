interface IFetchServiceConstructor {
  path?: string;
  body?: any;
  method?: string;
  needCredentials?: boolean;
}

export class FetchService {
  private _baseUrl = location.origin || 'http://localhost:3000';

  public path: string;
  public body: any;
  public method: string;
  public credentials: RequestCredentials;

  constructor(params: IFetchServiceConstructor) {
    this.path = params.path ?? '';
    this.body = params.body ?? '';
    this.method = params.method || 'GET';
    this.credentials = params.needCredentials ? 'include' : 'omit';
  }

  public async fetch<T>(): Promise<T> {
    const request = await fetch(`${this._baseUrl}${this.path}`, {
      body: JSON.stringify(this.body), // вынести потом
      headers: {
        'Content-Type': 'application/json',
      },
      method: this.method,
      credentials: this.credentials,
    });

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const response = await request.json();

    return response;
  }
}

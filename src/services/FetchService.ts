interface IFetchServiceConstructor {
  path?: string;
  body?: any;
  method?: string;
}

interface IFetchParams {
  needCredentials?: boolean;
}

export class FetchService {
  private _baseUrl = location.origin || 'http://localhost:3000';

  public path: string;
  public body: any;
  public method: string;

  constructor(params: IFetchServiceConstructor) {
    this.path = params.path ?? '';
    this.body = params.body ?? '';
    this.method = params.method || 'GET';
  }

  public async fetch(fetchParams: IFetchParams | undefined = {}): Promise<Response> {
    const request = await fetch(`${this._baseUrl}${this.path}`, {
      body: JSON.stringify(this.body), // вынести потом
      headers: {
        'Content-Type': 'application/json',
      },
      method: this.method,
      credentials: fetchParams.needCredentials ? 'include' : 'omit',
    });

    if (!request.ok) {
      throw new Error(request.statusText);
    }

    const response = await request.json();

    return response;
  }
}

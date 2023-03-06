export interface IRequest {
  method: 'GET' | 'POST' | 'PUT' | 'DEL';
  body?: any;
  endpoint: string;
};

export interface IResponse {};

export interface IHttpClient {
  request(options: IRequest): Promise<IResponse>;
};
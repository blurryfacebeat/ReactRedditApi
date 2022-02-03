import { AxiosInstance, AxiosRequestHeaders } from 'axios';

export interface IHttpClient {
  _instance: AxiosInstance;
}

export interface IHttpOptions {
  baseURL?: string;
  headers?: AxiosRequestHeaders;
  params?: Record<string, unknown>;
}
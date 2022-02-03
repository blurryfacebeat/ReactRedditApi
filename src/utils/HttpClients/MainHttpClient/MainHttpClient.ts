import { HttpClient } from '@/classes';
const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN;

export default new HttpClient({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});

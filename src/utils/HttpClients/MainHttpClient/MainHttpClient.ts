import { HttpClient } from '@/classes';
const BASE_URL = '';

export default new HttpClient({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json; charset=UTF-8' },
});

// Libraries
import axios from 'axios';

export const httpApi = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 1000,
  headers: {},
});

export default httpApi;

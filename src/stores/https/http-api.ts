// Libraries
import axios from 'axios';

export const httpApi = axios.create({
  baseURL: 'https://digital-challenge-backend.herokuapp.com',
  timeout: 1000,
  headers: {},
});

export default httpApi;

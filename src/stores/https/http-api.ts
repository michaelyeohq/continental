// Libraries
import axios from 'axios';

export const httpApi = axios.create({
  // baseURL: 'https://digital-challenge-backend.herokuapp.com',
  baseURL: 'https://digital-challenge-backend.herokuapp.com',
  headers: {
    'Access-Control-Allow-Origin': 'https://digital-challenge-backend.herokuapp.com',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: true,
});

export default httpApi;

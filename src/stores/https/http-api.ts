// Libraries
import axios from 'axios';

export const httpApi = axios.create({
  // baseURL: 'process.env.REACT_APP_BACKEND_URL',
  baseURL: process.env.REACT_APP_BACKEND_URL,
  headers: {
    'Access-Control-Allow-Origin': process.env.REACT_APP_BACKEND_URL,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  withCredentials: true,
});

export default httpApi;

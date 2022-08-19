import axios from 'axios';

export const config = {
  baseURL: 'http://localhost:3000',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
  },
};

export function configAxios() {
  try {
    const instance = axios.create(config);
    return instance;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
}
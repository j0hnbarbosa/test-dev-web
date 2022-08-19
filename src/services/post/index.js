import {
  configAxios,
} from '../client';

const instance = configAxios();

export const postRegisterUser = async (data) => {
  const result = await instance.post('/register_user', { data });
  return result.data;
};
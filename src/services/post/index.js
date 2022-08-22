import {
  api,
} from '../client';


export const postAuthentication = async ({ email, password }) => {
  const result = await api.post('/auth/login', { email, password });
  return result;
};

export const postRegisterUser = async (data) => {
  const result = await api.post('/register_contact', { data });
  console.log(result)
  if (result.error) {
    return result
  }

  return result.data;
};
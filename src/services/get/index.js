import {
  api,
} from '../client';

export const getCepData = async (cep) => {
  const result = await api.get(`/consult_cep?cep=${cep}`);
  return result;
};

export const getContacts = async (searchQuery = {}) => {
  const { offset = 0, limit = 20, search = '' } = searchQuery

  const result = await api.get(`/contacts?offset=${offset}&limit=${limit}&search=${search}`);
  return result.data;
};

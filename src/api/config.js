import axios from 'axios';
const hostAPI = 'localhost:8000';

export default axios.create({
  baseURL: `${hostAPI}api/v1/`
});

const instance = () => {
  return axios.create({
    baseURL: hostAPI
  });
};

export const getAPI = () => {
  const api = instance();
  return api;
};


export const getAPIOriginal = token => {
  const api = instance();
  api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  return api;
};

import axios from 'axios';

const baseURL = 'https://creatorshub.online/apibackend/api';

export const signinApi = (credentials) => {
  return axios.post(`${baseURL}/login`, credentials, {
    headers: { 'Accept': 'application/json' },
  });
};

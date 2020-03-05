import axios from 'axios';

import { HOST, REFRESH_TOKENS_PATH } from 'src/constants/requests';


export const redirectLoginPage = () => {
  window.location.pathname = '/login';
};

export const getAccessToken = () => localStorage.getItem('access');
export const getAccessTokenOrRedirect = () => localStorage.getItem('access') || redirectLoginPage();
export const setAccessToken = (accessToken) => localStorage.setItem('access', accessToken);
export const removeAccessToken = () => localStorage.removeItem('access');

export const getRefreshToken = () => localStorage.getItem('access');
export const getRefreshTokenOrRedirect = () => localStorage.getItem('refresh') || redirectLoginPage();
export const setRefreshToken = (refreshToken) => localStorage.setItem('refresh', refreshToken);
export const removeRefreshToken = () => localStorage.removeItem('refresh');

export const fetchAccessTokenWithRefreshToken = () => {
  const refreshToken = getRefreshTokenOrRedirect();

  return axios.post(HOST + REFRESH_TOKENS_PATH, {
    refresh: refreshToken,
  })
    .then((res) => {
      setAccessToken(res.data.access);
    });
};

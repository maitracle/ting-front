import axios from 'axios';

import { HOST, REFRESH_TOKENS_PATH } from 'src/constants/requests';


const redirectLoginPage = () => {
  window.location.pathname = '/login';
};

const getAccessToken = () => localStorage.getItem('access') || redirectLoginPage();
const setAccessToken = (accessToken) => localStorage.setItem('access', accessToken);

const getRefreshToken = () => localStorage.getItem('refresh') || redirectLoginPage();
const setRefreshToken = (refreshToken) => localStorage.setItem('refresh', refreshToken);

const getRequestConfig = (isNeededAuth) => {
  return {
    headers: {
      Authorization: isNeededAuth ? `Bearer ${getAccessToken()}` : '',
    }
  };
};

const fetchAccessTokenWithRefreshToken = () => {
  const refreshToken = getRefreshToken();

  return axios.post(HOST + REFRESH_TOKENS_PATH, {
    refresh: refreshToken,
  })
    .then((res) => {
      setAccessToken(res.data.access);
    })
};

const handleUnAuthorizedError = (err, path, isNeededAuth) => {
  if (isNeededAuth && err.response.status === 401) {
    return fetchAccessTokenWithRefreshToken()
      .then(() => {
        if (path.slice(-1) !== '#') {
          return requests.get(path + '#', isNeededAuth)
            .then((res) => {
              return res;
            })
        }
        else {
          throw 'prevent too many request';
        }
      })
  } else {
    return err;
  }
};

const requests = {
  get: (path, isNeededAuth = false) => {
    return axios.get(HOST + path , getRequestConfig(isNeededAuth))
      .catch((err) => {
        return handleUnAuthorizedError(err, path, isNeededAuth);
      })
  },
  post: (path, data, isNeededAuth = false) => {
    return axios.post(HOST + path, data, getRequestConfig(isNeededAuth))
      .catch((err) => {
        return handleUnAuthorizedError(err, path, isNeededAuth);
      })
  },
};

export default requests;

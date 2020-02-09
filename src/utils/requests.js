import axios from 'axios';

import { HOST } from 'src/constants/requests';
import { fetchAccessTokenWithRefreshToken, getAccessTokenOrRedirect } from 'src/utils/handleJwtToken';


const getRequestConfig = (isNeededAuth) => {
  return {
    headers: {
      Authorization: isNeededAuth ? `Bearer ${getAccessTokenOrRedirect()}` : '',
    }
  };
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
    throw err;
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

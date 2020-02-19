import axios from 'axios';

import { HOST } from 'src/constants/requests';
import { fetchAccessTokenWithRefreshToken, getAccessTokenOrRedirect } from 'src/utils/handleJwtToken';


const getRequestConfig = (isNeededAuth) => ({
  headers: {
    Authorization: isNeededAuth ? `Bearer ${getAccessTokenOrRedirect()}` : '',
  },
});

const handleUnAuthorizedError = (err, path, isNeededAuth) => {
  if (isNeededAuth && err.response.status === 401) {
    return fetchAccessTokenWithRefreshToken()
      .then(() => {
        if (path.slice(-1) !== '#') {
          // eslint-disable-next-line no-use-before-define
          return requests.get(`${path}#`, isNeededAuth)
            .then((res) => res);
        }

        // Todo(maitracle): 임시로 disable 한 lint rule을 해결한다.
        // eslint-disable-next-line no-throw-literal
        throw 'prevent too many request';
      });
  }
  throw err;
};

const requests = {
  get: (path, isNeededAuth = false) => axios.get(HOST + path, getRequestConfig(isNeededAuth))
    .catch((err) => handleUnAuthorizedError(err, path, isNeededAuth)),
  post: (path, data, isNeededAuth = false) => axios.post(HOST + path, data, getRequestConfig(isNeededAuth))
    .catch((err) => handleUnAuthorizedError(err, path, isNeededAuth)),
  put: (path, data, isNeededAuth) => axios.put(HOST + path, data, getRequestConfig(isNeededAuth))
    .catch((err) => handleUnAuthorizedError(err, path, isNeededAuth)),
  patch: (path, data, isNeededAuth) => axios.patch(HOST + path, data, getRequestConfig(isNeededAuth))
    .catch((err) => handleUnAuthorizedError(err, path, isNeededAuth)),
  delete: (path, data, isNeededAuth) => axios.delete(HOST + path, getRequestConfig(isNeededAuth))
    .catch((err) => handleUnAuthorizedError(err, path, isNeededAuth)),
};

export default requests;

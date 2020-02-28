import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { FETCH_LIKE_PATH, LOGIN_PATH, SIGN_IN_PATH } from 'src/constants/requests';
import {
  removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken,
} from 'src/utils/handleJwtToken';


export default class UserStore {
  @observable profile = {};

  constructor(root) {
    this.root = root;
  };

  @action logIn = (email, password) => {
    const data = {
      email,
      password,
    };

    return requests
      .post(LOGIN_PATH, data)
      .then((res) => {
        setRefreshToken(res.data.refresh);
        setAccessToken(res.data.access);

        return {
          status: res.status,
          message: res.statusText,
        };
      }).catch((err) => ({
        status: err.response.status,
        message: err.response.statusText,
      }));
  };

  @action logOut = () => {
    removeAccessToken();
    removeRefreshToken();
  };

  @action fetchLikes = () => {
    // Todo(maitracle): 확인용으로 작성한 함수이므로, likes store 추가 후 위치 변경
    requests.get(FETCH_LIKE_PATH, true)
      .then((res) => res)
      .catch((err) => err);
  };

  @action authUniv = (userCode) => {
    const data = {
      "user_code": userCode,
    };
    
    return requests
      .post(`${SIGN_IN_PATH}confirm-user/`, data)
      .then((res) => {

        return {
          status: res.status,
          message: res.statusText,
        };
      }).catch((err) => ({
        status: err.response.status,
        message: err.response.statusText,
      }));
  };
}

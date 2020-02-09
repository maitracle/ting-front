import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { FETCH_LIKE_PATH, LOGIN_PATH } from 'src/constants/requests';


export default class UserStore {
  @observable profile = {};

  constructor(root) {
    this.root = root;
  }

  @action logIn = (email, password) => {
    const data = {
      email: email,
      password: password,
    };

    return requests.post(LOGIN_PATH, data)
      .then((res) => {
        localStorage.setItem('refresh', res.data.refresh);
        localStorage.setItem('access', res.data.access);

        return {
          status: res.status,
          message: res.statusText,
        };
      }).catch((err) => {
        return {
          status: err.response.status,
          message: err.response.statusText,
        };
      });
  };

  @action logOut = () => {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
  };

  @action fetchLikes = () => {
    return requests.get(FETCH_LIKE_PATH, true)
      .then((res) => {
        console.log('then');
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log('catch');
        console.dir(err);
      })
  }
}

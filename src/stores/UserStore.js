import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { LOGIN_PATH } from 'src/constants/requests';


export default class UserStore {
  @observable profile = {};

  constructor(root) {
    this.root = root;
  }

  @action logIn = () => {
    const data = {
      email: 'maitracle@gmail.com',
      password: 'password123',
    };

    return requests.post(LOGIN_PATH, data)
      .then((res) => {
        localStorage.setItem('refresh', res.data.refresh);
        localStorage.setItem('access', res.data.access);

        return true;
      }).catch((err) => {
        return false;
      });
  };

  @action logOut = () => {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
  };
}

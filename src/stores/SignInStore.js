import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { SIGN_IN_PATH } from 'src/constants/requests';


export default class SignInStore {
  @observable formData = {
    email: '',
    password: '',
    nickname: '',
    gender: '',
  };

  constructor(root) {
    this.root = root;
  }

  @action setEmail = (email) => {
    this.formData.email = email;
  };

  @action setPassword = (password) => {
    this.formData.password = password;
  };

  @action setNickname = (nickname) => {
    this.formData.nickname = nickname;
  };

  @action setGender = (gender) => {
    this.formData.gender = gender;
  };

  @action getFormData = () => JSON.parse(JSON.stringify(this.formData));

  @action signIn = () => {
    const data = {
      email: this.formData.email,
      password: this.formData.password,
    };

    return requests.post(SIGN_IN_PATH, data)
      .then((res) => {

        return {
          status: res.status,
          message: res.statusText,
        };
      }).catch((err) => {
        if (err.response) {

          return {
            status: err.response.status,
            message: err.response.statusText,
          };
        }

        return {
          status: null,
          message: 'unknown error',
        }
      });
  }
}

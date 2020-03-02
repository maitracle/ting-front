import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { SIGN_UP_PATH } from 'src/constants/requests';


export default class SignUpStore {
  @observable step = 'SignUp';

  @observable stepList = ['SignUp', 'CheckEmail', 'MailSent'];

  @observable formData = {
    email: '',
    password: '',
    nickname: '',
    gender: '',
  };

  constructor(root) {
    this.root = root;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && (stepIndex + 1) !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };

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

  @action signUp = () => {
    const payload = this.getFormData();

    console.log(payload);

    // return requests.post(SIGN_UP_PATH, payload)
    //   .then((res) => {
    //     this.nextTo();
    //
    //     return {
    //       status: res.status,
    //       message: res.statusText,
    //     };
    //   }).catch((err) => {
    //     if (err.response) {
    //       return {
    //         status: err.response.status,
    //         message: err.response.statusText,
    //       };
    //     }
    //
    //     return {
    //       status: null,
    //       message: 'unknown error',
    //     };
    //   });
  }
}

import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { SIGN_UP_PATH } from 'src/constants/requests';


const checkUnivEmailApi = (univEmail) => requests.post();

export default class SignUpStore {
  @observable step = 'CheckEmail';

  @observable stepList = ['SignUp', 'CheckEmail', 'MailSent'];

  constructor(root) {
    this.root = root;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && (stepIndex + 1) !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };

  @action getFormData = () => JSON.parse(JSON.stringify(this.formData));

  @action signUp = (payload) => {
    return requests.post(SIGN_UP_PATH, payload)
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
            data: err.response.data,
          };
        }

        return {
          status: null,
          message: 'unknown error',
          data: {},
        };
      });
  };

  @action checkUnivEmailSend = (univEmail) => {
    checkUnivEmailApi(univEmail);
  }
}

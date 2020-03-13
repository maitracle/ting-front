import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { CHECK_UNIV_EMAIL_PATH, CONFIRM_USER_PATH, SIGN_UP_PATH } from 'src/constants/requests';
import { setAccessToken, setRefreshToken } from 'src/utils/handleJwtToken';


const signUpApi = (payload) => requests.post(SIGN_UP_PATH, payload);
const checkUnivEmailApi = (user_id, payload) => requests.patch(`${CHECK_UNIV_EMAIL_PATH(user_id)}`, payload, true);

export default class SignUpStore {
  @observable step = 'SignUp';

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
    return signUpApi(payload)
      .then((res) => {
        // Todo(maitracle): response의 coin history를 store에 저장하기
        setRefreshToken(res.data.refresh);
        setAccessToken(res.data.access);
        this.root.userStore.user = res.data.user;
        this.root.userStore.profile = res.data.profile;
        this.root.myPointStore.myPointHistoryList = res.data.coinHistory;

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

  @action checkUnivEmail = (universityEmail) => {
    const payload = {
      universityEmail,
    };

    return checkUnivEmailApi(this.root.userStore.user.id, payload)
      .then((res) => {
        this.step = 'MailSent';
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

  @action authUniv = (userCode) => {
    return requests
      .post(CONFIRM_USER_PATH, { userCode, })
      .then((res) => {

        return {
          status: res.status,
          message: res.statusText,
        };
      }).catch((err) => ({
        status: err.response.status,
        message: err.response.statusText,
      }));
  }
}

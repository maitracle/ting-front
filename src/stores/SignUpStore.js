import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import {
  CHECK_UNIV_EMAIL_PATH,
  CONFIRM_USER_PATH,
  SIGN_UP_PATH,
  UPLOAD_STUDENT_ID_CARD_IMAGE_PATH
} from 'src/constants/requests';
import { setAccessToken, setRefreshToken } from 'src/utils/handleJwtToken';


const signUpApi = (payload) => requests.post(SIGN_UP_PATH, payload);
const checkUnivEmailApi = (userId, payload) => requests.patch(`${CHECK_UNIV_EMAIL_PATH(userId)}`, payload, true);
const authUnivApi = (userCode) => requests.post(CONFIRM_USER_PATH, { userCode, });
const uploadStudentIdCardApi = (userId, formData) => requests.post(`${UPLOAD_STUDENT_ID_CARD_IMAGE_PATH}{userId}`, formData);

export default class SignUpStore {
  @observable step = 'CheckStudentIdCard';

  @observable stepList = ['SignUp', 'CheckStudentIdCard', 'MailSent'];

  constructor(root) {
    this.root = root;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && (stepIndex + 1) !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };

  @action signUp = (payload) => {
    return signUpApi(payload)
      .then((res) => {
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
    return authUnivApi(userCode)
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

  @action uploadStudentIdCard = (idCardImage) => {
    const formData = new FormData();
    const splitFileName = idCardImage.name.split('.');
    formData.append('idCardImage', idCardImage, `image.${splitFileName[splitFileName.length - 1]}`);

    return uploadStudentIdCardApi(this.root.userStore.user.id, formData);

  };
}

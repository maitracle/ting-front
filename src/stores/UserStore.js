import { action, observable } from 'mobx';

import requests from 'src/utils/requests';
import { GET_MY_USER_PATH, LOGIN_PATH, UPDATE_PROFILE_PATH, } from 'src/constants/requests';
import {
  getAccessToken,
  redirectLoginPage,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken,
} from 'src/utils/handleJwtToken';


const logInApi = (payload) => requests.post(LOGIN_PATH, payload);
const fetchMyProfileApi = () => requests.get(GET_MY_USER_PATH, true);
const updateProfileApi = (profile) => requests.patch(`${UPDATE_PROFILE_PATH}${profile.id}/`, profile, true);


export default class UserStore {
  @observable isLoggedIn = false;

  @observable user = {};
  @observable profile = {};

  constructor(root) {
    this.root = root;

    if (getAccessToken()) {
      fetchMyProfileApi()
        .then((res) => {
          // Todo(maitracle): response의 coin history를 store에 저장하기
          this.profile = res.data.user;
          this.profile = res.data.profile;
          this.root.myPointStore.myPointHistoryList = res.data.coinHistory;
          this.isLoggedIn = true;
        });
    }
  }

  @action logIn = (email, password) => {
    const payload = {
      email,
      password,
    };

    return logInApi(payload)
      .then((res) => {
        // Todo(maitracle): response의 coin history를 store에 저장하기
        setRefreshToken(res.data.refresh);
        setAccessToken(res.data.access);
        this.profile = res.data.user;
        this.profile = res.data.profile;
        this.root.myPointStore.myPointHistoryList = res.data.coinHistory;

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
    this.isLoggedIn = false;
    redirectLoginPage();
  };
  
  @action updateProfile = (profileData) => {
    return updateProfileApi(profileData)
      .then((res) => this.profile = {
        ...this.profile,
        ...res.data,
      });
  };
}

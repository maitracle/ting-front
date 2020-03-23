import { action, observable } from 'mobx';
import requests from 'src/utils/requests';
import { GET_OPEN_KAKAO_PATH, GET_PROFILE_LISTS_PATH, GET_PROFILE_RETRIEVE_PATH } from 'src/constants/requests';


const fetchFroshProfileListApi = () => requests.get(GET_PROFILE_LISTS_PATH, true);
const fetchFroshProfileDetailApi = (id) => requests.get(`${GET_PROFILE_RETRIEVE_PATH}${id}/`, true);
const fetchOpenKakaoLinkApi = (froshProfileId) => requests.get(`${GET_OPEN_KAKAO_PATH(froshProfileId)}`, true);

export default class FroshStore {
  @observable froshProfileList = [
    {
      id: 1,
    }, {
      id: 2,
    }
  ];

  @observable fetchedFroshProfileDetail = {};

  constructor(root) {
    this.root = root;
  }

  @action fetchFroshProfile = () => {
    fetchFroshProfileListApi()
      .then((res) => {
        this.froshProfileList = res.data;
      })
      .catch((err) => err);
  };

  @action fetchFroshProfileDetail = (froshProfileId) => {
    return fetchFroshProfileDetailApi(froshProfileId)
      .then((res) => {
        this.fetchedFroshProfileDetail = res.data;

        return {
          status: res.status,
          message: res.statusText,
        };
      });
  };

  @action fetchOpenKakaoLink = (froshProfileId) => {
    return fetchOpenKakaoLinkApi(froshProfileId)
      .then((res) => {
        return {
          status: res.status,
          message: res.statusText,
          chatLink: res.data.chatLink,
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
}

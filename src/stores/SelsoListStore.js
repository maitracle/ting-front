import { action, observable } from 'mobx';
import requests from 'src/utils/requests';
import { GET_OPEN_KAKAO_PATH, GET_PROFILE_LISTS_PATH, GET_PROFILE_RETRIEVE_PATH } from 'src/constants/requests';


const fetchSelsoListApi = () => requests.get(GET_PROFILE_LISTS_PATH, true);
const fetchSelsoDetailApi = (id) => requests.get(`${GET_PROFILE_RETRIEVE_PATH}${id}/`, true);
const fetchOpenKakaoLinkApi = (selsoId) => requests.get(`${GET_OPEN_KAKAO_PATH(selsoId)}`, true);

export default class SelsoListStore {
  @observable selsoList = [];

  @observable choosedSelso = null;

  @observable fetchedSelsoDetail = {};

  constructor(root) {
    this.root = root;
  }

  @action setSelsoList = () => {
    fetchSelsoListApi()
      .then((res) => {
        this.selsoList = res.data;
      })
      .catch((err) => err);
  };

  @action setChoosedSelso = (selsoItem) => {
    this.choosedSelso = selsoItem;
  };

  @action fetchSelsoDetail = () => {
    if (this.choosedSelso?.id) {
      return fetchSelsoDetailApi(this.choosedSelso.id)
        .then((res) => {
          this.fetchedSelsoDetail = res.data;

          return {
            status: res.status,
            message: res.statusText,
          };
        });
    }
  };

  @action fetchOpenKakaoLink = (selsoId) => fetchOpenKakaoLinkApi(selsoId)
    .then((res) => ({
      status: res.status,
      message: res.statusText,
      chatLink: res.data.chatLink,
    })).catch((err) => {
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
    })
}

import { action, observable } from 'mobx';
import requests from 'src/utils/requests';
import { GET_OPEN_KAKAO_PATH, GET_PROFILE_LISTS_PATH, GET_PROFILE_RETRIEVE_PATH, GET_MY_SELSO_PATH, UPDATE_PROFILE_PATH } from 'src/constants/requests';

const ableToUpdateField = ['id', 'appearance', 'personality', 'hobby', 'dateStyle', 'idealType', 'oneSentence', 'tags', 'chatLink']

const fetchMySelsoProfileApi = () => requests.get(GET_MY_SELSO_PATH, true);
const fetchSelsoListApi = (gender, university) => requests.get(`${GET_PROFILE_LISTS_PATH}?profile__gender=${gender}&profile__university=${university}`, true);
const fetchSelsoDetailApi = (id) => requests.get(`${GET_PROFILE_RETRIEVE_PATH}${id}/`, true);
const fetchOpenKakaoLinkApi = (selsoId) => requests.get(`${GET_OPEN_KAKAO_PATH(selsoId)}`, true);
const updateMySelsoProfileApi = (profileData) => requests.patch(`${UPDATE_PROFILE_PATH}${profileData.id}/`, profileData, true);

const setResponseToMySelsoProfile = (mySelsoData) => (res) => {
  for (const field of ableToUpdateField) {
    mySelsoData[field] = res.data[field]
  }
}

export default class SelsoListStore {
  @observable mySelsoProfile = {
    id: '',
    appearance: '',
    personality: '',
    hobby: '',
    dateStyle: '',
    idealType: '',
    oneSentence: '',
    tags: '',
    chatLink: '',
  };

  @observable selsoList = [];

  @observable choosedSelso = null;

  @observable fetchedSelsoDetail = {};

  constructor(root) {
    this.root = root;
  }

  @action getMySelsoProfile = () => fetchMySelsoProfileApi()
    .then(
      setResponseToMySelsoProfile(this.mySelsoProfile)
    )
    .catch((err) => err)

  @action setMySelsoProfile = (type, value) => {
    this.mySelsoProfile[type] = value
  }

  @action updateMySelsoProfile = () => updateMySelsoProfileApi(this.mySelsoProfile)
    .then(
      setResponseToMySelsoProfile(this.mySelsoProfile)
    )
    .then(
      alert('수정이 완료되었습니다.')
    )
    .catch((err) => err)

  @action setSelsoList = (gender, university) => fetchSelsoListApi(gender, university)
    .then((res) => {
      this.selsoList = res.data;
    })
    .catch((err) => err)

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

import { action, observable } from 'mobx';
import requests from 'src/utils/requests';
import { GET_PROFILE_LISTS_PATH } from 'src/constants/requests';

export default class SelsoListStore {
  @observable selsoList = [];

  @observable selectedSelsoId = null;

  @observable selectedSelsoDetail = {};

  constructor(root) {
    this.root = root;
  }

  @action setSelsoList = () => {
    requests
      .get(GET_PROFILE_LISTS_PATH, true)
      .then((res) => {
        this.selsoList = res.data;
      })
      .catch((err) => err);
  };
}

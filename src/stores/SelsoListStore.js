import { action, observable, toJS } from "mobx";
import { axios } from "axios";
import requests from "src/utils/requests";
import { GET_PROFILE_LISTS_PATH } from "src/constants/requests";

export default class SelsoListStore {
  @observable selsoList = [];

  constructor(root) {
    this.root = root;
  }

  @action setSelsoList = () => {
    requests
      .get(GET_PROFILE_LISTS_PATH, true)
      .then(res => {
        this.selsoList = [];
        this.selsoList = res.data;
      })
      .catch(err => {
        return err;
      });
  };
}

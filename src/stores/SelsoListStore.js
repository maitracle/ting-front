import { action, observable } from "mobx";

import requests from "src/utils/requests";
import { GET_PROFILE_LISTS_PATH } from "src/constants/requests";

export default class SelsoListStore {
  @observable selsoList = [123];

  constructor(root) {
    this.root = root;
  }
  @action setSelsoList = () => {
    console.log(localStorage.access);
    const a = localStorage.getItem("access");
    console.log(a);

    requests
      .get(GET_PROFILE_LISTS_PATH, true) //jwt token어떻게 태워서 보낼것인가?
      .then(res => {
        console.log(res);
        this.selsoList = [];
        this.selsoList = res.data;
      })
      .catch(err => {
        return err;
      });
  };
}

import { action, observable, toJS } from "mobx";

import requests from "src/utils/requests";
import { GET_PROFILE_LISTS_PATH } from "src/constants/requests";

export default class SelsoListStore {
  @observable selsoList = [];

  constructor(root) {
    this.root = root;
  }

  @action getSelsoList = () => {
    return this.selsoList;
  };

  @action setSelsoList = () => {
    requests
      .get(GET_PROFILE_LISTS_PATH, true)
      .then(res => {
        // console.log(res.data[0].id);
        this.selsoList = res.data;
        // // this.selsoList = res.data;
        // this.selsoList.push(res.data);
        // // console.log(typeof res.data);
        // // console.log(res.data[1]);
        // // console.log(this.selsoList[1].id);
        // // console.log(typeof this.selsoList);
        // // console.dir(this.selsoList);
        // console.log(this.selsoList[0][0]);
        // console.log(this.selsoList[0][0]["id"]);
        // console.log(this.selsoList[0][0].id);
      })
      .catch(err => {
        return err;
      });
  };
}

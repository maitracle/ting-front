import { action, observable } from "mobx";

import requests from "src/utils/requests";
import { GET_PROFILE_LISTS_PATH } from "src/constants/requests";

export default class SelsoListStore {
  @observable selsoList = [123];

  constructor(root) {
    this.root = root;
  }
  @observable test = 11;
  @action setSelsoList = () => {
    requests
      .get(GET_PROFILE_LISTS_PATH, true)
      .then(res => {
        console.log(res);
        this.selsoList = [];
        this.selsoList = res.data;
      })
      .catch(err => {
        return err;
      });
  };

  // @action getList =() => {
  //   requests.get(GET_PROFILE_LISTS_PATH, true)
  //   .then((res) => {
  //     return {
  //       nickname: res.nickname,
  //       gender: res.gender,
  //       age: res.gender,
  //       height: res.height,
  //       body_type: res.body_type,
  //       tag: res.tag,
  //       image: res.image,
  //     }
  //   })
  //   .catch((err) => {
  //     return err
  //   })
  // }
}

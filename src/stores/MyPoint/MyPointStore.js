import { observable, computed } from 'mobx';
import requests from 'src/utils/requests';
import { FETCH_POINT_PATH } from 'src/constants/requests';
import {
  getAccessToken,
} from 'src/utils/handleJwtToken';


const fetchMyPointHistoryApi = () => requests.get(FETCH_POINT_PATH, true);

export default class MyPointStore {
  
  @observable myPointHistory = [];

  constructor(root){
    this.root = root;

    if (getAccessToken()) {   
      fetchMyPointHistoryApi()
        .then((res) => {
          this.myPointHistory = res.data.reverse();
        })
    }
  }

  @computed get restPoint() {
    return this.myPointHistory[0]?.restCoin;
  }
};
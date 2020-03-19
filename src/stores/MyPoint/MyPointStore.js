import { observable, computed, action } from 'mobx';
import requests from 'src/utils/requests';
import { FETCH_POINT_PATH } from 'src/constants/requests';


const fetchMyPointHistoryApi = () => requests.get(FETCH_POINT_PATH, true);

export default class MyPointStore {
  
  @observable myPointHistoryList = [];

  constructor(root){
    this.root = root;
  }

  @computed get restPoint() {
    if (this.myPointHistoryList.length) {
      return this.myPointHistoryList[0].restCoin;
    }

    return 0;
  }

  @action fetchMyPointHistory = () => {
    fetchMyPointHistoryApi()
      .then((res) => {
        this.myPointHistoryList = res.data;
      });
  }
}

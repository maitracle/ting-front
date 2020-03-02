import { observable, computed } from 'mobx';
import requests from 'src/utils/requests';
import { FETCH_DIA_PATH } from 'src/constants/requests';
import {
  getAccessToken,
} from 'src/utils/handleJwtToken';


const fetchMyDiaHistoryApi = () => requests.get(FETCH_DIA_PATH, true);

export default class MyDiaStore {
  
  @observable myDiaHistory = [];

  constructor(root){
    this.root = root;

    if (getAccessToken()) {   
      fetchMyDiaHistoryApi()
        .then((res) => {
          this.myDiaHistory = res.data.reverse();
        })
    }
  }

  @computed get restDia(){
    return this.myDiaHistory[0]?.restCoin;
  }
};
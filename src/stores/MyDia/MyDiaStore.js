import { action, observable, computed } from 'mobx';
import {
  getAccessToken,
  removeAccessToken, removeRefreshToken, setAccessToken, setRefreshToken,
} from 'src/utils/handleJwtToken';


const fetchMyDiaHistoryApi = () => requests.get(FETCH_DIA_PATH, true);

export default class MyDiaStore {
  
  @observable myDiaHistory = [
    {
        "user": 1,
        "restCoin": 30,
        "reason": "SIGNUP",
        "profile": null,
        "createdAt": "2020-02-28T10:01:31.568264Z",
        "updatedAt": "2020-02-28T10:01:31.568264Z"
    },
    {
        "user": 1,
        "restCoin": 28,
        "reason": "VIEW_PROFILE",
        "profile": null,
        "createdAt": "2020-02-28T10:01:46.226079Z",
        "updatedAt": "2020-02-28T10:01:46.226079Z"
    },
    {
        "user": 1,
        "restCoin": 26,
        "reason": "VIEW_PROFILE",
        "profile": null,
        "createdAt": "2020-02-28T10:01:53.656215Z",
        "updatedAt": "2020-02-28T10:01:53.656215Z"
    },
    {
        "user": 1,
        "restCoin": 16,
        "reason": "SEND_MESSAGE",
        "profile": null,
        "createdAt": "2020-02-28T10:02:03.040132Z",
        "updatedAt": "2020-02-28T10:02:03.040132Z"
    }
  ];
  @observable restDia = this.myDiaHistory[this.myDiaHistory.length - 1].restCoin;

  constructor(root){
    this.root = root;

    // if (getAccessToken()) {
    //   fetchMyDiaHistoryApi()
    //     .then((res) => {
    //       this.myDiaHistory = res.data;
    //     })
    // }
  }


};
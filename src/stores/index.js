import SignUpStore from 'src/stores/SignUpStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';
import MyDiaStore from './MyDia'

class RootStore {
  constructor() {
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.signUpStore = new SignUpStore(this);
    this.myDiaStore = new MyDiaStore(this);
  }
}

export default RootStore;

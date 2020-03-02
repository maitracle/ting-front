import RegisterStore from 'src/stores/RegisterStore';
import SignUpStore from 'src/stores/SignUpStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';

class RootStore {
  constructor() {
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.registerStore = new RegisterStore(this);
    this.signUpStore = new SignUpStore(this);
  }
}

export default RootStore;

import SignInStore from 'src/stores/SignInStore';
import RegisterStore from 'src/stores/RegisterStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';

class RootStore {
  constructor() {
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
    this.registerStore = new RegisterStore(this);
  }
}

export default RootStore;

import SignInStore from 'src/stores/SignInStore';
import UserStore from './UserStore';


class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
  }
}

export default RootStore;

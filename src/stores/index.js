import CounterStore from './CounterStore';
import UserStore from './UserStore';
import SignInStore from 'src/stores/SignInStore';


class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this);
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
  }
}

export default RootStore;

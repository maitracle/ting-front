import SignInStore from 'src/stores/SignInStore';
import CounterStore from './CounterStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.user = new UserStore(this);
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
  }
}

export default RootStore;

import CounterStore from './CounterStore';
import UserStore from './UserStore';


class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
    this.user = new UserStore(this);
  }
}

export default RootStore;

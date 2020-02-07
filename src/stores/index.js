import CounterStore from './CounterStore';

class RootStore {
  constructor() {
    this.counter = new CounterStore(this);
  }
}

export default RootStore;

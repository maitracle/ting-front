import CounterStore from "./CounterStore";
import UserStore from "./UserStore";
import SignInStore from "src/stores/SignInStore";
import ProfileFormStore from "src/stores/ProfileFormStore";

class RootStore {
  constructor() {
    this.counterStore = new CounterStore(this);
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
    this.profileFormStore = new ProfileFormStore(this);
  }
}

export default RootStore;

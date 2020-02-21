import SignInStore from 'src/stores/SignInStore';
import ProfileFormStore from 'src/stores/ProfileFormStore';
import UserStore from './UserStore';


class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
    this.profileFormStore = new ProfileFormStore(this);
  }
}

export default RootStore;

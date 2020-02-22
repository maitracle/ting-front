import SignInStore from 'src/stores/SignInStore';
import ProfileFormStore from 'src/stores/ProfileFormStore';
import UserStore from './UserStore';
import SelsoListStore from './SelsoListStore';

class RootStore {
  constructor() {
    this.selsoListStore = new SelsoListStore(this);
    this.userStore = new UserStore(this);
    this.signInStore = new SignInStore(this);
    this.profileFormStore = new ProfileFormStore(this);
  }
}

export default RootStore;

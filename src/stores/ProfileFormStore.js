import { action, observable } from 'mobx';


export default class ProfileFormStore {
  @observable step = 'Oneline';

  @observable stepList = ['Oneline', 'Tag', 'Image'];

  @observable profileFormData = {
    oneline: '',
    tag: '',
    image: '',

  }

  constructor(root) {
    this.root = root;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && stepIndex + 1 !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };

  @action setOneline = (oneline) => {
    this.profileFormData.oneline = oneline;
  };

  @action setTag = (tag) => {
    this.profileFormData.tag = tag;
  };

  @action setImage = (image) => {
    this.profileFormData.image = image;
  };
}

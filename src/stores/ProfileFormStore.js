import { action, observable } from 'mobx';


export default class ProfileFormStore {
  @observable step = 'Oneline';

  @observable stepList = ['Oneline', 'Tag', 'Image', 'Age', 'Height', 'BodyType', 'Religion', 'IsSmoke'];

  // @observable step2 = '';

  // @observable step2List = ['나이', '키', '체형', '종교', '흡연여부'];

  @observable profileFormData = {
    oneline: '',
    tag: '',
    image: '',
    age: '',
    height: '',
    bodytype: '',
    religion: '',
    issmoke: '',
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

  @action backTo = () => {
    const stepIndex = this.stepList.indexOf(this.step); // 0
    if (stepIndex !== 0 && stepIndex + 8 !== this.stepList.length) {
      this.step = this.stepList[stepIndex - 1];
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

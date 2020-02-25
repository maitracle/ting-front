import { action, observable } from 'mobx';


export default class ProfileFormStore {
  @observable step = 'Age';

  @observable stepList = ['Age', 'Height', 'BodyType', 'Religion', 'IsSmoke', 'Oneline', 'Tag', 'Image'];

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

  @action setAge = (age) => {
    this.profileFormData.age = age;
  };

  @action setHeight = (height) => {
    this.profileFormData.height = height;
  };

  @action setBodyType = (bodytype) => {
    this.profileFormData.bodytype = bodytype;
  };
}

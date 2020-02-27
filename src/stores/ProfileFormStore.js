import { action, observable } from 'mobx';


export default class ProfileFormStore {
  @observable currentStep = '';

  @observable stepList = [];

  @observable groupList = ['Group1', 'Group2', 'Group3', 'Group4', ];

  @observable group1 = ['Age', 'Height', 'BodyType', 'Religion', 'IsSmoke', ];

  @observable group2 = ['Appearance', 'Personality', 'Hobby', 'DateStyle', 'IdealType', ];

  @observable group3 = ['OneSentence', 'Tags', 'Image'];

  @observable group4 = ['ChatLink', ];

  @observable profileFormData = {
    oneline: '',
    tag: '',
    image: '',

  };

  constructor(root) {
    this.root = root;

    this.stepList = this.stepList.concat(this.group1, this.group2, this.group3, this.group4);
    this.currentStep = this.stepList[0] || '';
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && stepIndex + 1 !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };

  @action backTo = () => {
    const stepIndex = this.stepList.indexOf(this.step); // 0
    if (stepIndex !== 0 && stepIndex + 3 !== this.stepList.length) {
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

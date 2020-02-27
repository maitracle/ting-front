import { action, computed, observable } from 'mobx';


export class RegisterStore {
  @observable stepList = [];

  @observable currentStep = '';

  @observable groupList = ['group1', 'group2', 'group3', 'group4', ];
  @observable group1 = ['Age', 'Height', 'BodyType', 'Religion', 'IsSmoke', ];
  @observable group2 = ['Appearance', 'Personality', 'Hobby', 'DateStyle', 'IdealType', ];
  @observable group3 = ['OneSentence', 'Tags', 'Image'];
  @observable group4 = ['ChatLink', ];

  @observable registerData = {
    age: '',
    height: '',
    bodyType: '',
    religion: '',
    isSmoke: '',
  };

  constructor(root) {
    this.root = root;

    this.stepList = this.stepList.concat(this.group1, this.group2, this.group3, this.group4);
    this.currentStep = this.stepList[0] || '';
  }

  @computed get currentGroup()  {
    let foundGroup = '';
    this.groupList.forEach((groupKey) => {
      this[groupKey].forEach((step) => {
        if (this.currentStep === step) {
          foundGroup = groupKey;
        }
      })
    });

    return foundGroup;
  };

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

  @action setOneSentence = (oneSentence) => {
    this.registerData.oneSentence = oneSentence;
  };

  @action setTag = (tags) => {
    this.registerData.tags = tags;
  };

  @action setImage = (image) => {
    this.registerData.image = image;
  };
}

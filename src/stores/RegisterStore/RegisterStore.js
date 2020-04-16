/* eslint-disable import/prefer-default-export */
import { action, computed, observable } from 'mobx';
import requests from 'src/utils/requests';
import { REGISTER_SELSO_PATH } from 'src/constants/requests';


const registerSelsoApi = (payload) => requests.post(`${REGISTER_SELSO_PATH}`, payload, true);

export class RegisterStore {
  @observable stepList = [];

  @observable currentStep = '';

  @observable groupList = ['group1', 'group2', 'group3', 'group4'];

  @observable group1 = ['Nickname', 'Height', 'BodyType', 'Religion', 'IsSmoke'];

  @observable group2 = ['Appearance', 'Personality', 'Hobby', 'DateStyle', 'IdealType'];

  @observable group3 = ['OneSentence', 'Tags', 'Image'];

  @observable group4 = ['ChatLink'];

  @observable registerData = {
    profile: '',
    nickname: '',
    height: '',
    bodyType: '',
    religion: '',
    isSmoke: '',
    appearance: '',
    personality: '',
    hobby: '',
    dateStyle: '',
    idealType: '',
    oneSentence: '',
    tags: '',
    image: null,
    chatLink: '',
  };

  constructor(root) {
    this.root = root;

    this.stepList = this.stepList.concat(this.group1, this.group2, this.group3, this.group4);
    this.currentStep = this.stepList[0] || '';
  }

  @computed get currentGroup() {
    let foundGroup = '';
    this.groupList.forEach((groupKey) => {
      this[groupKey].forEach((step) => {
        if (this.currentStep === step) {
          foundGroup = groupKey;
        }
      });
    });

    return foundGroup;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.currentStep);
    if (stepIndex !== -1 && stepIndex + 1 !== this.stepList.length) {
      this.currentStep = this.stepList[stepIndex + 1];
    } 
  };

  @action backTo = () => {
    const stepIndex = this.stepList.indexOf(this.currentStep); // 0
    if (stepIndex !== 0) {
      this.currentStep = this.stepList[stepIndex - 1];
    }
  };

  @action setRegisterData = (type, value) => {
    this.registerData[type] = value;
  };


  @action registerSelso = () => {
    const formData = new FormData();
    const splitFileName = this.registerData.image.name.split('.');
    formData.append('image', this.registerData.image, `image.${splitFileName[splitFileName.length - 1]}`);
    formData.append('profile', this.root.userStore.profile.id);

    const fieldNameList = ['profile', 'nickname', 'height', 'bodyType', 'religion', 'isSmoke', 'appearance',
      'personality', 'hobby', 'dateStyle', 'idealType', 'oneSentence', 'tags', 'chatLink',];

    for (let key of fieldNameList) {
      formData.append(key, this.registerData[key]);
    }

    return registerSelsoApi(formData)
      .then((res) => ({
        status: res.status,
        message: res.statusText,
      })).catch((err) => {
        if (err.response) {
          return {
            status: err.response.status,
            message: err.response.statusText,
            data: err.response.data,
          };
        }

        return {
          status: null,
          message: 'unknown error',
          data: {},
        };
      });
  };
}

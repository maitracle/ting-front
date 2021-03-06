import { action, computed, observable } from 'mobx';
import requests from 'src/utils/requests';
import { REGISTER_SELSO_PATH } from 'src/constants/requests';


const registerFroshProfileApi = (payload) => requests.post(`${REGISTER_SELSO_PATH}`, payload, true);

export default class FroshRegisterStore {
  @observable stepList = [];

  @observable currentStep = '';

  @observable groupList = ['group1', 'group2', 'group3', 'group4'];

  @observable group1 = ['Age', 'Height', 'BodyType', 'Religion', 'IsSmoke'];

  @observable group2 = ['Appearance', 'Personality', 'Hobby', 'DateStyle', 'IdealType'];

  @observable group3 = ['OneSentence', 'Tags', 'Image'];

  @observable group4 = ['ChatLink'];

  @observable registerData = {};

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

  @action registerFroshProfile = () => registerFroshProfileApi(this.registerData)
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
}

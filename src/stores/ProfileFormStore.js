import { action, observable } from "mobx";

import requests from "src/utils/requests";

export default class ProfileFormStore {
  @observable step = "Oneline";
  @observable stepList = ["Oneline", "Tag", "Image"];

  constructor(root) {
    this.root = root;
  }

  @action nextTo = () => {
    const stepIndex = this.stepList.indexOf(this.step);

    if (stepIndex !== -1 && stepIndex + 1 !== this.stepList.length) {
      this.step = this.stepList[stepIndex + 1];
    }
  };
}

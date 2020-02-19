import React, { useEffect } from "react";
import { inject, observer } from "mobx-react";

import Oneline from "src/modules/ProfileForm/Oneline";
import Tag from "src/modules/ProfileForm/Tag";
import Image from "src/modules/ProfileForm/Image";

const mapStepToComponent = {
  Oneline: Oneline,
  Tag: Tag,
  Image: Image
};

const ProfileFormPage = inject("profileFormStore")(
  observer(({ profileFormStore }) => {
    let StepComponent = mapStepToComponent[profileFormStore.step];

    // useEffect(() => {
    //   StepComponent = mapStepToComponent[signInStore.step];
    // }, [signInStore.step]);

    return (
      <div>
        <div>프로필폼페이지</div>
        <StepComponent />
      </div>
    );
  })
);

export default ProfileFormPage;

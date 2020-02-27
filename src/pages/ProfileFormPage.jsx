import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import Oneline from 'src/modules/ProfileForm/Oneline';
import Tag from 'src/modules/ProfileForm/Tag';
import Image from 'src/modules/ProfileForm/Image';

const mapStepToComponent = {
  Age: Oneline,
  Oneline,
  Tag,
  Image,
};

const ProfileFormPage = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    let StepComponent = mapStepToComponent[profileFormStore.currentStep];

    useEffect(() => {
      StepComponent = mapStepToComponent[profileFormStore.currentStep];
    }, [profileFormStore.currentStep]);

    return (
      <div>
        <div>프로필폼 페이지 </div>
        <StepComponent />
      </div>
    );
  }),
);

export default ProfileFormPage;

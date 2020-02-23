import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileFormPage.scss';

import Oneline from 'src/modules/ProfileForm/Oneline';
import Tag from 'src/modules/ProfileForm/Tag';
import Image from 'src/modules/ProfileForm/Image';
import Age from 'src/modules/ProfileFormStep2/Age';
import Height from 'src/modules/ProfileFormStep2/Height';
import BodyType from 'src/modules/ProfileFormStep2/BodyType';
import Religion from 'src/modules/ProfileFormStep2/Religion';
import IsSmoke from 'src/modules/ProfileFormStep2/IsSmoke';

const mapStepToComponent = {
  Oneline,
  Tag,
  Image,
  Age,
  Height,
  BodyType,
  Religion,
  IsSmoke,
};

const ProfileFormPage = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    let StepComponent = mapStepToComponent[profileFormStore.step];

    useEffect(() => {
      StepComponent = mapStepToComponent[profileFormStore.step];
    }, [profileFormStore.step]);

    return (
      <div className="profileFormPage">
        <div>프로필폼페이지 </div>
        <StepComponent />
      </div>
    );
  }),
);

export default ProfileFormPage;

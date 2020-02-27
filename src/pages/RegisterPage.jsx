import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import Oneline from 'src/modules/Register/StepComponents/Oneline';
import Tag from 'src/modules/Register/StepComponents/Tag';
import Image from 'src/modules/Register/StepComponents/Image';
import Age from 'src/modules/Register/StepComponents/Age';

const mapStepToComponent = {
  Age,
  Oneline,
  Tag,
  Image,
};

const RegisterPage = inject('registerStore')(
  observer(({ registerStore }) => {
    let StepComponent = mapStepToComponent[registerStore.currentStep];

    useEffect(() => {
      StepComponent = mapStepToComponent[registerStore.currentStep];
    }, [registerStore.currentStep]);

    return (
      <div>
        <div>프로필폼 페이지 </div>
        <StepComponent />
      </div>
    );
  }),
);

export default RegisterPage;

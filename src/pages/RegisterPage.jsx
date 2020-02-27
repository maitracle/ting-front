import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import Oneline from 'src/modules/Register/Oneline';
import Tag from 'src/modules/Register/Tag';
import Image from 'src/modules/Register/Image';

const mapStepToComponent = {
  Age: Oneline,
  Oneline,
  Tag,
  Image,
};

const RegisterPage = inject('registerStore')(
  observer(({ registerStore }) => {
    let StepComponent = mapStepToComponent[registerStore.currentStep];

    useEffect(() => {
      console.log(registerStore.currentStep);
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

import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import Age from 'src/modules/Register/StepComponents/Age';
import Height from 'src/modules/Register/StepComponents/Height';
import IsSmoke from 'src/modules/Register/StepComponents/IsSmoke';
import Religion from 'src/modules/Register/StepComponents/Religion';
import BodyType from 'src/modules/Register/StepComponents/BodyType';

const mapStepToComponent = {
  Age,
  Height,
  BodyType,
  Religion,
  IsSmoke,
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

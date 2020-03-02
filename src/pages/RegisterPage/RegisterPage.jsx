import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import RegisterHeader from 'src/modules/Register/RegisterHeader';
import Age from 'src/modules/Register/StepComponents/Group1/Age';
import Height from 'src/modules/Register/StepComponents/Group1/Height';
import IsSmoke from 'src/modules/Register/StepComponents/Group1/IsSmoke';
import Religion from 'src/modules/Register/StepComponents/Group1/Religion';
import BodyType from 'src/modules/Register/StepComponents/Group1/BodyType';
import Appearance from 'src/modules/Register/StepComponents/Group2/Apperance';
import Personality from 'src/modules/Register/StepComponents/Group2/Personality';
import Hobby from 'src/modules/Register/StepComponents/Group2/Hobby';
import DateStyle from 'src/modules/Register/StepComponents/Group2/DateStyle';
import IdealType from 'src/modules/Register/StepComponents/Group2/IdealType';
import OneSentence from 'src/modules/Register/StepComponents/Group3/OneSentence';
import Tags from 'src/modules/Register/StepComponents/Group3/Tags';
import Image from 'src/modules/Register/StepComponents/Group3/Image';
import ChatLink from 'src/modules/Register/StepComponents/Group4/ChatLink';
import RegisterBtnSet from '../../modules/Register/RegisterBtnSet';

const mapStepToComponent = {
  Age,
  Height,
  BodyType,
  Religion,
  IsSmoke,
  Appearance,
  Personality,
  Hobby,
  DateStyle,
  IdealType,
  OneSentence,
  Tags,
  Image,
  ChatLink,
};

export const RegisterPage = inject('registerStore')(
  observer(({ registerStore }) => {
    let StepComponent = mapStepToComponent[registerStore.currentStep];

    useEffect(() => {
      StepComponent = mapStepToComponent[registerStore.currentStep];
    }, [registerStore.currentStep]);

    return (
      <div>
        <div>프로필폼 페이지 </div>
        <RegisterHeader />
        <StepComponent />
        <div className="blankBox" />
        <RegisterBtnSet />
      </div>
    );
  }),
);

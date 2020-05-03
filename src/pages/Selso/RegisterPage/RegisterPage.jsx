import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import RegisterHeader from 'src/modules/Register/RegisterHeader';
import Nickname from 'src/modules/Register/StepComponents/Group1/Nickname';
import Height from 'src/modules/Register/StepComponents/Group1/Height';
import IsSmoke from 'src/modules/Register/StepComponents/Group1/IsSmoke';
import Religion from 'src/modules/Register/StepComponents/Group1/Religion';
import BodyType from 'src/modules/Register/StepComponents/Group1/BodyType';
import Appearance from 'src/modules/Register/StepComponents/Group2/Appearance';
import Personality from 'src/modules/Register/StepComponents/Group2/Personality';
import Hobby from 'src/modules/Register/StepComponents/Group2/Hobby';
import DateStyle from 'src/modules/Register/StepComponents/Group2/DateStyle';
import IdealType from 'src/modules/Register/StepComponents/Group2/IdealType';
import OneSentence from 'src/modules/Register/StepComponents/Group3/OneSentence';
import Tags from 'src/modules/Register/StepComponents/Group3/Tags';
import Image from 'src/modules/Register/StepComponents/Group3/Image';
import ChatLink from 'src/modules/Register/StepComponents/Group4/ChatLink';


const mapStepToComponent = {
  Nickname,
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

export const RegisterPage = inject('registerStore', 'selsoListStore', 'userStore')(
  observer(({ registerStore, selsoListStore, userStore, history }) => {
    let StepComponent = mapStepToComponent[registerStore.currentStep];

    useEffect(() => {
      StepComponent = mapStepToComponent[registerStore.currentStep];
    }, [registerStore.currentStep]);

    useEffect(() => {
      if (userStore.profile === null) {
        // 기본정보를 입력하지 않은 사용자는 sign-up페이지로 이동시킨다.
        history.push('/user/sign-up/YEUNGNAM');
      } else {
        selsoListStore.getMySelsoProfile()
          .then((res) => {
            if (res?.status === 200 && res?.statusText === 'OK') {
              // self date profile등록을 마친 사용자는 완료 페이지로 이동시킨다.
              history.push('/user/register/complete');
            }
          });
      }
    }, []);

    return (
      <div>
        <RegisterHeader />
        <StepComponent history={history}/>
      </div>
    );
  }),
);

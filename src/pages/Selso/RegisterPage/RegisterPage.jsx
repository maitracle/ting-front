import React, { useEffect, useRef, useState } from 'react';
import { inject, observer } from 'mobx-react';
import RegisterHeader from 'src/modules/Register/RegisterHeader';
import Nickname from 'src/modules/Register/StepComponents/Group1/Nickname'
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

const gnbOffsetHeight = 44;

export const RegisterPage = inject('registerStore', 'selsoListStore')(
  observer(({ registerStore, selsoListStore, history }) => {
    let StepComponent = mapStepToComponent[registerStore.currentStep];

    const registerHeaderElement = useRef();
    const registerBtnSetElement = useRef();
    const [screenHeight, setScreenHeight] = useState(0);
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    useEffect(() => {
      StepComponent = mapStepToComponent[registerStore.currentStep];
    }, [registerStore.currentStep]);

    useEffect(() => {
      selsoListStore.getMySelsoProfile()
        .then((res) => {
          if (res?.status === 200 && res?.statusText === 'OK') {
            history.push('/user/register/complete');
          }
        })
    });

    return (
      <div>
        <RegisterHeader ref={registerHeaderElement}/>
        <StepComponent 
          history={history}
          componentMinHeight={registerHeaderElement.current?.offsetHeight}
          ref={registerBtnSetElement} 
          componentMinHeight={
            screenHeight - registerBtnSetElement.current?.offsetHeight - registerHeaderElement.current?.offsetHeight - gnbOffsetHeight
          }
        />
      </div>
    );
  }),
);

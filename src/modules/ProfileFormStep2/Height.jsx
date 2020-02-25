import React from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileTwoStep.scss';
import TextInput from 'src/components/Input/TextInput';
import BtnNext from 'src/components/Button/BtnNext';
import BtnPrev from 'src/components/Button/BtnPrev';


const Height = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setHeight = (e) => profileFormStore.setHeight(e.target.value);
    return (
      <div className="survey">
        <div className="surveyHeader2">
          <p className="qTitle">
            날강두님의
            <br />
            기본정보를 알려주세요.
          </p>
          <div className="contentWrap2">
            <div className="child">나이</div>
            <div className="child">키</div>
            <div className="child">체형</div>
            <div className="child">종교</div>
            <div className="child">흡연여부</div>
          </div>
        </div>
        <div className="progressBar">
          <div className="progressRate40" />
        </div>
        <div className="anwserWrap">
          <p className="question"> 키를 알려주세요</p>
          <TextInput placeholder="-" value={profileFormStore.profileFormData.height} onChange={setHeight} text="cm" />
        </div>
        <div className="buttonWrap">
          <BtnPrev onClick={profileFormStore.backTo} />
          <BtnNext onClick={profileFormStore.nextTo} />
        </div>
      </div>
    );
  }),
);

export default Height;

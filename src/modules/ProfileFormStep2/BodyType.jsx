import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileTwoStep.scss';
import BtnPrev from 'src/components/Button/BtnPrev';
import BtnNext from 'src/components/Button/BtnNext';
import RadioInput from 'src/components/Input/RadioInput';

const BodyType = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const [radios, setRadios] = useState([
      {
        id: 1,
        text: '마른',
        checked: true,
      },
      {
        id: 2,
        text: '슬림',
        checked: false,
      },
      {
        id: 3,
        text: '보통',
        checked: false,
      },
    ]);
    const setBodyType = (text) => profileFormStore.setBodyType(text);
    const onClick = useCallback(
      (id, text) => {
        setRadios(
          radios.map((radio) => (radio.id === id ? { ...radio, checked: true } : { ...radio, checked: false })),
        );
        setBodyType(text);
      },
      [radios],
    );
    // store에 저장되는 data 확인
    console.log(`store에 저장되는 data: ${profileFormStore.profileFormData.bodytype}`);
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
          <div className="progressRate60" />
        </div>
        <div className="anwserWrap">
          <p> 체형을 선택해주세요</p>
          <div className="RadioGroup">
            {radios.map((radio) => (
              <RadioInput key={radio.id} id={radio.id} text={radio.text} checked={radio.checked} onClick={onClick} />
            ))}
          </div>
        </div>
        <div className="buttonWrap">
          <BtnPrev onClick={profileFormStore.backTo} />
          <BtnNext onClick={profileFormStore.nextTo} />
        </div>
      </div>
    );
  }),
);

export default BodyType;

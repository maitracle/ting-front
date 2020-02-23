import React from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileTwoStep.scss';

const Religion = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setReligion = (e) => profileFormStore.setReligion(e.target.value);
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
          <div className="progressRate80" />
        </div>
        <div className="anwserWrap">
          <p> 종교를 선택해주세요</p>
          <input type="text" value={profileFormStore.profileFormData.religion} onChange={setReligion} />
        </div>
        <div className="buttonWrap">
          <button onClick={profileFormStore.backTo}>뒤로</button>
          <button onClick={profileFormStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);

export default Religion;

import React from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileOneStep.scss';

const OneLine = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setOneline = (e) => profileFormStore.setOneline(e.target.value);
    return (
      <div className="survey">
        <div className="surveyHeader">
          <p className="qTitle">
            프로필 썸네일에 들어갈
            <br />
            한줄을 적어주세요
          </p>
          <div className="exampleWrap">
            예시)
            <br />
            -우리,잔잔하게 마음을 울리는 연애를 해봐요
            <br />
            서로 믿고 의지할 수 있는 사람을 만나고 싶어요!
          </div>
          <button>예시더보기</button>
          <div className="contentWrap">
            <div className="child">"한줄표현"</div>
          &nbsp;&nbsp;&nbsp;
            <div className="child">태그작성</div>
          &nbsp;&nbsp;&nbsp;
            <div className="child">사진추가</div>
          </div>
        </div>
        <div className="progressBar">
          <div className="progressRate">33% </div>
        </div>
        <div className="anwserWrap">
          <p> 한줄표현입력하세요</p>
          <input type="text" value={profileFormStore.profileFormData.oneline} onChange={setOneline} />
        </div>
        <div className="buttonWrap">
          <button onClick={profileFormStore.backTo}>뒤로</button>
          <button onClick={profileFormStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);

export default OneLine;

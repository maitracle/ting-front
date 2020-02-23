import React from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileOneStep.scss';

const Tag = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setTag = (e) => profileFormStore.setTag(e.target.value);
    return (
      <div className="survey">
        <div className="surveyHeader">
          <p className="qTitle">
          프로필 썸네일에 들어갈
            <br />
          간단한 태그를 작성해주세요.
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
            <div className="child">한줄표현</div>
            <div className="child">"태그작성"</div>
            <div className="child">사진추가</div>
          </div>
        </div>
        <div className="progressBar">
          <div className="progressRate66" />
        </div>
        <div className="anwserWrap">
          <p> #태그를 추가하세요</p>
          <input className="tagInput" type="text" value={profileFormStore.profileFormData.tag} onChange={setTag} />
        </div>
        <div className="buttonWrap">
          <button onClick={profileFormStore.backTo}>뒤로</button>
          <button onClick={profileFormStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);
export default Tag;

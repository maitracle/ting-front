import React from 'react';
import { inject, observer } from 'mobx-react';
import './ProfileOneStep.scss';


const Image = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setImage = (e) => profileFormStore.setImage(e.target.value);
    return (
      <div className="survey">
        <div className="surveyHeader">
          <p className="qTitle">
      프로필 썸네일에 들어갈
            <br />
      사진을 올려주세요
          </p>
          <div className="exampleWrap">
      예시)
            <br />
      -이미지예시1
            <br />
      이미지예시2
          </div>
          <button>예시더보기</button>
          <div className="contentWrap">
            <div className="child">한줄표현</div>
            <div className="child">태그작성</div>
            <div className="child">"사진추가"</div>
          </div>
        </div>
        <div className="progressBar">
          <div className="progressRate3" />
        </div>
        <div className="anwserWrap">
          <p> 이미지를 넣으세요</p>
          <input type="text" value={profileFormStore.profileFormData.image} onChange={setImage} />
        </div>
        <div className="buttonWrap">
          <button onClick={profileFormStore.backTo}>뒤로</button>
          <button onClick={profileFormStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);

export default Image;

import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

const mapGroupToTitle = {
  group1: 'group 1 title',
  group2: 'group 2 title',
  group3: 'group 3 title',
  group4: 'group 4 title',

};

export default inject('registerStore')(observer(({ registerStore }) => {

  useEffect(() => {
    console.log(registerStore.currentGroup);
  }, []);

  return (
    <div>
      <div className="surveyHeader">
        <p className="qTitle">
          { mapGroupToTitle[registerStore.currentGroup] }
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
          <div className="child">태그작성</div>
          <div className="child">사진추가</div>
        </div>
      </div>
      <div className="progressBar">
        <div className="progressRate" />
      </div>
    </div>
  );
}));

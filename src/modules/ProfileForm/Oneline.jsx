import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

const OneLine = inject('profileFormStore')(
  observer(({ profileFormStore }) => (
    <div>
      <div>One Line ㅡ프로필 썸네일에 들어갈 한줄을 적어주세요</div>
      <div>
          예시)
        <br />
        {' '}
-우리,잔잔하게 마음을 울리는 연애를 해봐요
      </div>
      <button>예시더보기</button>
      <div>
        <div>한줄표현</div>
        <div>태그작성</div>
        <div>사진추가</div>
      </div>
      {/* <input> 35자 이내로 자신에 대해 표현해주세요</input> */}
      <button onClick={profileFormStore.nextTo}>뒤로</button>
      <button onClick={profileFormStore.nextTo}>다음</button>
    </div>
  )),
);

export default OneLine;

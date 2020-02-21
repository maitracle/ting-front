import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

const Tag = inject('profileFormStore')(observer(({profileFormStore}) => (
  <div>
    <div>프로필 썸네일에 들어갈 간단한 태그을 적어주세요</div>
    <div>
        예시)
      <br />
      {' '}
 #잘생김 #예쁨 #낙타눈동자
    </div>
    <button>예시더보기</button>
    <div>
      <div>한줄표현</div>
      <div>태그작성</div>
      <div>사진추가</div>
    </div>
    {/* <input>#자신에대한 태그 작성</input> */}
    <div>+기능추가</div>
    <button onClick={profileFormStore.nextTo}>뒤로</button>
    <button onClick={profileFormStore.nextTo}>다음</button>
  </div>
);
))
export default Tag;

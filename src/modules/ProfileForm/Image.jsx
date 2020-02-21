import React from 'react';
import { inject, observer } from 'mobx-react';

const Image = inject('profileFormStore')(
  observer(({ profileFormStore }) => (
    <div>
      <div>Image 프로필 썸네일에 들어갈 사진을 올려주세요</div>
      <div>
        예시)
        <br />
        {' '}
 Image Here
      </div>
      <button>예시더보기</button>
      <div>
        <span>한줄표현</span>
        &nbsp;&nbsp;&nbsp;
        <span>태그작성</span>
        &nbsp;&nbsp;&nbsp;
        <span>"사진추가"</span>
      </div>
      {/* <input>사진추가하기</input> */}
      <p> 이미지넣으세요</p>
      <button onClick={profileFormStore.backTo}>뒤로</button>
      <button onClick={profileFormStore.nextTo}>다음</button>
    </div>
  )),
);

export default Image;

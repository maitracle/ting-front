import React from 'react';
import { inject, observer } from 'mobx-react';

const OneLine = inject('profileFormStore')(
  observer(({ profileFormStore }) => {
    const setOneline = (e) => profileFormStore.setOneline(e.target.value);
    return (
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
          <span>"한줄표현"</span>
          &nbsp;&nbsp;&nbsp;
          <span>태그작성</span>
          &nbsp;&nbsp;&nbsp;
          <span>사진추가</span>
        </div>

        <p> 한줄표현입력하세요</p>
        <input type="text" value={profileFormStore.profileFormData.oneline} onChange={setOneline} />

        <button onClick={profileFormStore.backTo}>뒤로</button>
        <button onClick={profileFormStore.nextTo}>다음</button>
      </div>
    );
  }),
);

export default OneLine;

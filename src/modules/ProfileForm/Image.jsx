import React, { useState } from "react";
import { inject, observer } from "mobx-react";

const Image = () => {
  return (
    <div>
      <div>프로필 썸네일에 들어갈 사진을 올려주세요</div>
      <div>
        예시)
        <br /> Image Here
      </div>
      <button>예시더보기</button>
      <div>
        <div>한줄표현</div>
        <div>태그작성</div>
        <div>사진추가</div>
      </div>
      {/* <input>사진추가하기</input> */}
      <button onClick={"signInStore.signIn"}>뒤로</button>
      <button onClick={"signInStore.nextTo"}>다음</button>
    </div>
  );
};

export default Image;

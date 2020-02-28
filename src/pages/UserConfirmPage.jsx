import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { useParams } from 'react-router-dom'

const UserConfirmPage = inject('userStore')(observer(({ userStore }) => {

  const { userCode } = useParams();

  useEffect(() => {
    userStore.authUniv(userCode);
  }, []);
  
  // Todo(10000001a): a 태그와 button에 링크 아직 부여 안함.
  return (
    <div>
      <div>홍익대학교 학생 날강두님 인증 완료</div>
      <div>4단계를 통해 캠쿠와 함께 마이프로필을 완성해봐요!</div>
      <a>Skip</a>
      <button>만들러 가기</button>
    </div>
  );
}));

export default UserConfirmPage;
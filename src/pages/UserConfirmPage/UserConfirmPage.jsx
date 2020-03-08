import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { useParams, Link } from 'react-router-dom'



const UserConfirmPage = inject('signUpStore')(observer(({ signUpStore }) => {

  const { userCode } = useParams();

  useEffect(() => {
    signUpStore.authUniv(userCode);
  }, []);

  const title = ( nickname ) => {
    return(
      <div>
        <p>홍익대학교 학생</p>
        <p>{ nickname }님 인증 완료</p>
      </div>
    )}
  
  // Todo(10000001a): a 태그와 button에 링크 아직 부여 안함.
  return (
    <div>
      { title(signUpStore.root.userStore.profile.nickname) }
      <p>4단계를 통해</p>
      <p>캠쿠와 함께 마이프로필을 완성해봐요!</p>
      <div>이미지</div>
      <Link to={'/selso'}>
        <div>skip</div>
      </Link>
      <Link>
        <button>만들러 가기</button>
      </Link>
    </div>
  );
}));

export default UserConfirmPage;
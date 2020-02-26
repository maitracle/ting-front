import React from 'react';

import { Link } from 'react-router-dom';
import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import './MyList.scss';
import { inject, observer } from 'mobx-react';


export const MyList = inject('userStore')(observer(({ userStore }) => {

  return (
    <div>
      <ProfileCard imageSrc={userStore.profile.nickname} nickname={userStore.profile.nickname} />

      <div className="linkWrapper">
        <Link to="/my/profile">
          <div className="linkItem">
            <span className="linkText">마이 프로필 수정하기</span>
          </div>
        </Link>
        <Link to="/my/diamond">
          <div className="linkItem">
            <span className="linkText">다이아 변동사항</span>
          </div>
        </Link>
        <Link to="/my/questions">
          <div className="linkItem">
            <span className="linkText">자주 묻는 질문</span>
          </div>
        </Link>
        <Link to="/my/review">
          <div className="linkItem">
            <span className="linkText">리뷰 남기기</span>
          </div>
        </Link>

      </div>
    </div>
  );
}));

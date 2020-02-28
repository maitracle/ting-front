import React from 'react';

import { Link } from 'react-router-dom';
import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import './MyList.scss';


export const MyList = () => {

  return (
    <div>
      <ProfileCard imageSrc={'./blahblah.png'} nickname={'날강두'} />

      <div className={'linkWrapper'}>
        <Link to={'/my/profile'}>
          <div className={'linkItem'}>
            <span className={'linkText'}>마이 프로필 수정하기</span>
          </div>
        </Link>
        <Link to={'/my/dia'}>
          <div className={'linkItem'}>
            <span className={'linkText'}>다이아 변동사항</span>
          </div>
        </Link>
        <Link to={'/my/questions'}>
          <div className={'linkItem'}>
            <span className={'linkText'}>자주 묻는 질문</span>
          </div>
        </Link>
        <Link to={'/my/review'}>
          <div className={'linkItem'}>
            <span className={'linkText'}>리뷰 남기기</span>
          </div>
        </Link>

      </div>
    </div>
  );
};

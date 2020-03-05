import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import styles from './MyList.module.scss';


export const MyList = inject('userStore')(observer(({ userStore }) => {

  return (
    <div>
      <ProfileCard imageSrc={userStore.profile.image} nickname={userStore.profile.nickname} />

      <div className={styles.linkWrapper}>
        <Link to="/my/profile">
          <div className={styles.linkItem}>
            <span className={styles.linkText}>마이 프로필 수정하기</span>
          </div>
        </Link>
        <Link to="/my/point">
          <div className={styles.linkItem}>
            <span className={styles.linkText}>포인트 변동사항</span>
          </div>
        </Link>
        <Link to="/my/questions">
          <div className={styles.linkItem}>
            <span className={styles.linkText}>자주 묻는 질문</span>
          </div>
        </Link>
        <Link to="/my/review">
          <div className={styles.linkItem}>
            <span className={styles.linkText}>리뷰 남기기</span>
          </div>
        </Link>

        <div onClick={() => userStore.logOut()} className={styles.linkItem}>
          <span className={styles.linkText}>로그아웃</span>
        </div>

      </div>
    </div>
  );
}));

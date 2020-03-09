import React, { useEffect } from 'react'
import { inject, observer } from 'mobx-react';
import { useParams, Link } from 'react-router-dom'

import styles from './UserConfirmPage.module.scss';



const UserConfirmPage = inject('signUpStore')(observer(({ signUpStore, history }) => {

  const { userCode } = useParams();

  useEffect(() => {
    signUpStore.authUniv(userCode);
  }, []);

  const title = ( nickname ) => {
    return(
      <div className={styles.titleWrapper}>
        <p className={styles.title}>
          홍익대학교 학생<br/>
          { nickname }님 인증 완료
        </p>
      </div>
    )}

  // Todo(10000001a): div를 img로 변경.
  return (
    <div className={styles.pageWrapper}>
      { title(signUpStore.root.userStore.profile.nickname) }
      <div>
        <p className={styles.description}>
          4단계를 통해<br/>
          캠쿠와 함께 마이프로필을 완성해봐요!
        </p>
      </div>
      <div className={styles.image}></div>
      <div className={styles.skipButtonWrapper}>
        <Link to='/selso' className={styles.skipButton} style={{ textDecoration: 'none' }}>Skip</Link>
      </div>
      <div>
        <Link to='/register' className={styles.nextButtonWrapper} style={{ textDecoration: 'none' }}>
          <button className={styles.nextButton}>만들러 가기</button>
        </Link>
      </div>
    </div>
  );
}));

export default UserConfirmPage;
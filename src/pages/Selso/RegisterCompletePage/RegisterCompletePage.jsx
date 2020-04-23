import React from 'react';
import { inject, observer } from 'mobx-react';
import { serviceOpeningDate } from 'src/constants/dates';

import styles from './RegisterCompletePage.module.scss'
import Btn from 'src/components/Button/Btn';


const RegisterCompletePage = inject('userStore')(
  observer(({ userStore, history }) => {
    return (
        <div className={styles.pageWrapper}>
          <div className={styles.titleWrapper}>
            <div>{userStore.profile?.nickname}님의</div>
            <div>마이프로필이 완성되었습니다!</div>
          </div>

          <div className={styles.description}>
            { serviceOpeningDate }에 카카오톡 링크로 찾아갈게요!
          </div>

          <img src={require('src/assets/images/Register/cheerPerson@3x.png')} className={styles.image} alt='등록 완료' />

          <div className={styles.buttonWrapper}>
            <Btn onClick={() => history.push('/')}>메인 페이지로</Btn>
          </div>
        </div>
    );
  }),
);

export default RegisterCompletePage;

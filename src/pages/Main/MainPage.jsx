import React from 'react';

import styles from './MainPage.module.scss';

export default () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.ctaSection}>
        <h1 className={styles.pageTitle}>
          나와 딱 맞는<br />
          운명의 상대를 찾아보세요.
        </h1>
        <div className={styles.countdownWrapper}>
          <span className={styles.countdownDescription}>
          셀소 리스트 오픈날까지
          </span>
          <div className={styles.countdown}>
            D - countdown
          </div>
        </div>
        <button className={styles.ctaButton}><span className={styles.buttonText}>간편하게 회원가입 하기</span></button>
      </div>
      <img src={require('src/assets/images/Main/LandingImage.png')} className={styles.landingImage} alt="사용 방법" />
    </div>
  );
};

import React, { useEffect, useState } from 'react';

import styles from './MainPage.module.scss';
import { yeungnamSelsoListOpenDate } from 'src/constants/dates';


export default () => {
  const [timerID, setTimerId] = useState(null);
  const [leftTime, setLeftTime] = useState('D - ');
  const [isOpenSelsoList, setIsOpenSelsoList] = useState(false);

  const timer = () => setInterval(() => {
    const now = new Date();
    let distance = yeungnamSelsoListOpenDate.getTime() - now.getTime();

    if (distance < 0) {
      setIsOpenSelsoList(true);
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const str = `D - ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
    setLeftTime(str);
  }, 1000);

  useEffect(() => {
    // set timer
    setTimerId(timer());
  }, []);

  useEffect(() => {
    // clear timer
    if (isOpenSelsoList) {
      clearInterval(timerID);
    }
  }, [isOpenSelsoList]);

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
            {
              isOpenSelsoList ?
                '셀소 오픈!'
                :
                leftTime
            }
          </div>
        </div>
        <button className={styles.ctaButton}><span className={styles.buttonText}>간편하게 회원가입 하기</span></button>
      </div>
      <img src={require('src/assets/images/Main/LandingImage.png')} className={styles.landingImage} alt="사용 방법" />
    </div>
  );
};

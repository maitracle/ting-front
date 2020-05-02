import React from 'react';

import styles from './MainPage.module.scss';

export default () => {
  return (
    <div className={styles.pageWrapper}>
      <img src={require('src/assets/images/Main/LandingImage.png')} className={styles.landingImage} alt="사용 방법" />
    </div>
  );
};

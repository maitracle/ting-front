import React from 'react';

import styles from './ProfileCard.module.scss';

export const ProfileCard = ({ imageSrc, nickname }) => (
  <div>
    <img src={imageSrc || require('src/assets/images/defaultProfileImage.png')} className={styles.image} alt={'프로필 이미지'} />
    <div className={styles.nicknameWrapper}><span className={styles.nickName}>{ nickname }</span></div>
    <div className={styles.aperture} />
  </div>
);

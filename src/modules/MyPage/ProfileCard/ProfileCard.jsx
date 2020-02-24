import React from 'react';

import './ProfileCard.scss';

export const ProfileCard = ({ imageSrc, nickname }) => (
  <div>
    <img src={imageSrc} className={'image'} alt={'프로필 이미지'} />
    <div className={'nicknameWrapper'}><span className={'nickName'}>{ nickname }</span></div>
    <div className={'aperture'} />
  </div>
);

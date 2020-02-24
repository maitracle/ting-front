import React from 'react';

import './MyProfile.scss';
import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';


export const MyProfile = () => {

  return (
    <div>
      <ProfileCard imageSrc={'./blahblah.png'} nickname={'날강두'} />

      <section className={'sectionWrapper'}>
        <div className={'inputWrapper'}>
          <div className={'label'}>오픈카카오 링크</div>
          <input className={'inputBox'} type={'text'}/>
        </div>

        <div className={'inputWrapper'}>
          <div className={'label'}>태그</div>
          <input className={'inputBox'} type={'text'}/>
        </div>

        <div className={'inputWrapper'}>
          <div className={'label'}>한줄 자기소개</div>
          <input className={'inputBox'} type={'text'}/>
        </div>
      </section>

      <div className={'separator'} />

      <section className={'sectionWrapper'}>
        <div className={'textBoxWrapper'}>
          <div className={'label'}>외모 / 스타일</div>
          <textarea className={'textArea'} />
        </div>

        <div className={'textBoxWrapper'}>
          <div className={'label'}>성격</div>
          <textarea className={'textArea'} />
        </div>

        <div className={'textBoxWrapper'}>
          <div className={'label'}>취미 / 여가</div>
          <textarea className={'textArea'} />
        </div>

        <div className={'textBoxWrapper'}>
          <div className={'label'}>연애관</div>
          <textarea className={'textArea'} />
        </div>

        <div className={'textBoxWrapper'}>
          <div className={'label'}>이상형</div>
          <textarea className={'textArea'} />
        </div>
      </section>
    </div>
  );
};

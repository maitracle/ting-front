import React, { useEffect, useState } from 'react';

import './MyProfile.scss';
import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';
import { inject, observer } from 'mobx-react';


export const MyProfile = inject('userStore')(observer(({ userStore }) => {

  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    setProfileData(userStore.profile);
  }, [userStore.profile]);

  const setForm = (key) => (event) => setProfileData({ ...profileData, [key]: event.target.value });

  const updateProfile = () => userStore.updateProfile(profileData);

  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={userStore.profile.image} nickname={userStore.profile.nickname} />

        <section className="sectionWrapper">
          <div className="inputWrapper">
            <div className="label">오픈카카오 링크</div>
            <input value={profileData.chatLink || ''} onChange={setForm('chatLink')} className="inputBox" type="text" />
          </div>

          <div className="inputWrapper">
            <div className="label">태그</div>
            <input value={profileData.tags || ''} onChange={setForm('tags')} className="inputBox" type="text" />
          </div>

          <div className="inputWrapper">
            <div className="label">한줄 자기소개</div>
            <input value={profileData.oneSentence || ''} onChange={setForm('oneSentence')} className="inputBox" type="text"/>
          </div>
        </section>

        <div className="separator" />

        <section className="sectionWrapper">
          <div className="textBoxWrapper">
            <div className="label">외모 / 스타일</div>
            <textarea value={profileData.appearance || ''} onChange={setForm('appearance')} className="textArea" />
          </div>

          <div className="textBoxWrapper">
            <div className="label">성격</div>
            <textarea value={profileData.personality || ''} onChange={setForm('personality')} className="textArea" />
          </div>

          <div className="textBoxWrapper">
            <div className="label">취미 / 여가</div>
            <textarea value={profileData.hobby || ''} onChange={setForm('hobby')} className="textArea" />
          </div>

          <div className="textBoxWrapper">
            <div className="label">연애관</div>
            <textarea value={profileData.dateStyle || ''} onChange={setForm('dateStyle')} className="textArea" />
          </div>

          <div className="textBoxWrapper">
            <div className="label">이상형</div>
            <textarea value={profileData.idealType || ''} onChange={setForm('idealType')} className="textArea" />
          </div>
        </section>
        <button style={{border: 'solid 1px black'}} onClick={updateProfile}>update</button>
      </div>
      :
      null
  );
}));

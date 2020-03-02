import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import styles from './MyProfile.module.scss';


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

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <input value={profileData.chatLink || ''} onChange={setForm('chatLink')} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <input value={profileData.tags || ''} onChange={setForm('tags')} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <input value={profileData.oneSentence || ''} onChange={setForm('oneSentence')} className={styles.inputBox} type="text"/>
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.sectionWrapper}>
          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>외모 / 스타일</div>
            <textarea value={profileData.appearance || ''} onChange={setForm('appearance')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <textarea value={profileData.personality || ''} onChange={setForm('personality')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <textarea value={profileData.hobby || ''} onChange={setForm('hobby')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <textarea value={profileData.dateStyle || ''} onChange={setForm('dateStyle')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <textarea value={profileData.idealType || ''} onChange={setForm('idealType')} className={styles.textArea} />
          </div>
        </section>
        <button style={{border: 'solid 1px black'}} onClick={updateProfile}>update</button>
      </div>
      :
      null
  );
}));

import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import styles from './MyProfile.module.scss';
import requests from 'src/utils/requests';
import { GET_MY_SELSO_PATH, UPDATE_PROFILE_PATH } from 'src/constants/requests';

export const MyProfile = inject('userStore')(observer(({ userStore }) => {

  const [mySelsoProfileData, setMySelsoProfileData] = useState({});

  useEffect(() => {
    fetchMySelsoProfile().then((res) => {
      setMySelsoProfileData(res.data)
    })
  }, []);

  const fetchMySelsoProfile = () => requests.get(GET_MY_SELSO_PATH, true);
  const updateMySelsoProfile = (profileData) => requests.patch(`${UPDATE_PROFILE_PATH}${profileData.id}/`, profileData, true);

  const setForm = (key) => (event) => setMySelsoProfileData({ ...mySelsoProfileData, [key]: event.target.value });

  const updateProfile = () => updateMySelsoProfile(mySelsoProfileData);

  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={userStore.profile.image} nickname={userStore.profile.nickname} />

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <input value={mySelsoProfileData.chatLink || ''} onChange={setForm('chatLink')} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <input value={mySelsoProfileData.tags || ''} onChange={setForm('tags')} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <input value={mySelsoProfileData.oneSentence || ''} onChange={setForm('oneSentence')} className={styles.inputBox} type="text"/>
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.sectionWrapper}>
          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>외모 / 스타일</div>
            <textarea value={mySelsoProfileData.appearance || ''} onChange={setForm('appearance')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <textarea value={mySelsoProfileData.personality || ''} onChange={setForm('personality')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <textarea value={mySelsoProfileData.hobby || ''} onChange={setForm('hobby')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <textarea value={mySelsoProfileData.dateStyle || ''} onChange={setForm('dateStyle')} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <textarea value={mySelsoProfileData.idealType || ''} onChange={setForm('idealType')} className={styles.textArea} />
          </div>
        </section>
        <button style={{border: 'solid 1px black'}} onClick={updateProfile}>update</button>
      </div>
      :
      null
  );
}));

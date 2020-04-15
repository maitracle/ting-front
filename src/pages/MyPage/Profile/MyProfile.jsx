import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import styles from './MyProfile.module.scss';

export const MyProfile = inject('userStore', 'selsoListStore')(observer(({ userStore, selsoListStore }) => {

  useEffect(() => {
    selsoListStore.getMySelsoProfile();
  }, []);

  const setForm = (key) => (event) => setMySelsoProfileData({ ...mySelsoProfileData, [key]: event.target.value });

  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={userStore.profile.image} nickname={userStore.profile.nickname} />

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <input value={selsoListStore.mySelsoProfile.chatLink || ''} onChange={e => selsoListStore.setMySelsoProfile('chatLink', e.target.value)} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <input value={selsoListStore.mySelsoProfile.tags || ''} onChange={e => selsoListStore.setMySelsoProfile('tags', e.target.value)} className={styles.inputBox} type="text" />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <input value={selsoListStore.mySelsoProfile.oneSentence || ''} onChange={e => selsoListStore.setMySelsoProfile('oneSentence', e.target.value)} className={styles.inputBox} type="text"/>
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.sectionWrapper}>
          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>외모 / 스타일</div>
            <textarea value={selsoListStore.mySelsoProfile.appearance || ''} onChange={e => selsoListStore.setMySelsoProfile('appearance', e.target.value)} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <textarea value={selsoListStore.mySelsoProfile.personality || ''} onChange={e => selsoListStore.setMySelsoProfile('personality', e.target.value)} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <textarea value={selsoListStore.mySelsoProfile.hobby || ''} onChange={e => selsoListStore.setMySelsoProfile('hobby', e.target.value)} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <textarea value={selsoListStore.mySelsoProfile.dateStyle || ''} onChange={e => selsoListStore.setMySelsoProfile('dateStyle', e.target.value)} className={styles.textArea} />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <textarea value={selsoListStore.mySelsoProfile.idealType || ''} onChange={e => selsoListStore.setMySelsoProfile('idealType', e.target.value)} className={styles.textArea} />
          </div>
        </section>
        <button style={{border: 'solid 1px black'}} onClick={selsoListStore.updateMySelsoProfile}>update</button>
      </div>
      :
      null
  );
}));

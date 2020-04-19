import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';

import styles from './MyProfile.module.scss';
import Btn from 'src/components/Button/Btn';

export const MyProfile = inject('userStore', 'selsoListStore')(observer(({ userStore, selsoListStore }) => {

  const [mySelfDateProfileData, setMySelfDateProfileData] = useState({})

  useEffect(() => {
    selsoListStore.getMySelsoProfile();
  }, []);

  useEffect(() => {
    setMySelfDateProfileData(selsoListStore.mySelsoProfile)
  }, [selsoListStore.mySelsoProfile])

  const setForm = (key) => (event) => setMySelfDateProfileData({ ...mySelfDateProfileData, [key]: event.target.value });

  const update = () => {
    selsoListStore.updateMySelsoProfile(mySelfDateProfileData)
      .then((res) => {
        if (res.status === 200) {
          alert('수정이 완료되었습니다!');
        } else {
          alert('수정이 실패하였습니다!');
        }
      })
  }
  
  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={selsoListStore.mySelsoProfile.image} nickname={selsoListStore.mySelsoProfile.nickname} />

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <input
              value={mySelfDateProfileData.chatLink || ''}
              onChange={setForm('chatLink')}
              className={styles.inputBox}
              type="text"
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <input
              value={mySelfDateProfileData.tags || ''}
              onChange={setForm('tags')}
              className={styles.inputBox}
              type="text"
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <input
              value={mySelfDateProfileData.oneSentence || ''}
              onChange={setForm('oneSentence')}
              className={styles.inputBox}
              type="text"
            />
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.sectionWrapper}>
          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>외모 / 스타일</div>
            <textarea
              value={mySelfDateProfileData.appearance || ''}
              onChange={setForm('appearance')}
              className={styles.textArea}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <textarea
              value={mySelfDateProfileData.personality || ''}
              onChange={setForm('personality')}
              className={styles.textArea}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <textarea
              value={mySelfDateProfileData.hobby || ''}
              onChange={setForm('hobby')}
              className={styles.textArea}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <textarea
              value={mySelfDateProfileData.dateStyle || ''}
              onChange={setForm('dateStyle')}
              className={styles.textArea}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <textarea
              value={mySelfDateProfileData.idealType || ''}
              onChange={setForm('idealType')}
              className={styles.textArea}
              />
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <Btn 
            value={"수정하기"}
            onClick={update}
            type={"UpdateMySelso"}  
          />
        </div>
      </div>
      :
      null
  );
}));

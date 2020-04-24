import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import Input from 'src/components/Form/Input';
import { selsoFieldsMaxLengthLimit, selsoFieldsMinLengthLimit } from 'src/constants/textLength';
import { getLengthValidationMessage, getChatLinkValidationMessage, getTagsValidationMessage } from 'src/utils/validations';

import styles from './MyProfile.module.scss';
import Btn from 'src/components/Button/Btn';

export const MyProfile = inject('userStore', 'selsoListStore')(observer(({ userStore, selsoListStore }) => {

  const [mySelfDateProfileData, setMySelfDateProfileData] = useState({
    chatLink: '',
    tags: '',
    oneSentence: '',
    appearance: '',
    personality: '',
    hobby: '',
    dateStyle: '',
    idealType: '',
    oneSentence: '',
  });
  const [chatLinkValidationMessage, setChatLinkValidationMessage] = useState('');
  const [tagsValidationMessage, setTagsValidationMessage] = useState('');
  const [oneSentenceValidationMessage, setOneSentenceValidationMessage] = useState('');
  const [appearanceValidationMessage, setAppearanceValidationMessage] = useState('');
  const [personalityValidationMessage, setPersonalityValidationMessage] = useState('');
  const [hobbyValidationMessage, setHobbyValidationMessage] = useState('');
  const [dateStyleValidationMessage, setDateStyleValidationMessage] = useState('');
  const [idealTypeValidationMessage, setIdealTypeValidationMessage] = useState('');

  useEffect(() => {
    selsoListStore.getMySelsoProfile();
  }, []);

  useEffect(() => {
    setMySelfDateProfileData(selsoListStore.mySelsoProfile)
  }, [selsoListStore.mySelsoProfile]);
  
  const validateChatLink = (data) => {
    setChatLinkValidationMessage(getChatLinkValidationMessage(data));
    
    if (chatLinkValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateTags = (data) => {
    setTagsValidationMessage(getTagsValidationMessage(data));

    if (tagsValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateOneSentence = (data) => {
    setOneSentenceValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.OneSentence, selsoFieldsMaxLengthLimit.OneSentence, data));
    
    if (data.length === 0) {
      setOneSentenceValidationMessage('자신을 표현할 한 문장을 입력해주세요.');
    }

    if (oneSentenceValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateAppearance = (data) => {
    setAppearanceValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.Appearance, selsoFieldsMaxLengthLimit.Appearance, data));
    
    if (appearanceValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validatePersonality = (data) => {
    setPersonalityValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.Personality, selsoFieldsMaxLengthLimit.Personality, data));
    
    if (personalityValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateHobby = (data) => {
    setHobbyValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.Hobby, selsoFieldsMaxLengthLimit.Hobby, data));
    
    if (hobbyValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateDateStyle = (data) => {
    setDateStyleValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.DateStyle, selsoFieldsMaxLengthLimit.DateStyle, data));
    
    if (dateStyleValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }

  const validateIdealType = (data) => {
    setIdealTypeValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.IdealType, selsoFieldsMaxLengthLimit.IdealType, data));
    
    if (idealTypeValidationMessage === '') {
      return true;
    } else {
      return false;
    }
  }
  
  const setForm = (key) => (event) => setMySelfDateProfileData({ ...mySelfDateProfileData, [key]: event.target.value });

  const update = () => {
    const isValid = validateChatLink(mySelfDateProfileData.chatLink) 
      && validateTags(mySelfDateProfileData.tags)
      && validateOneSentence(mySelfDateProfileData.oneSentence)
      && validateAppearance(mySelfDateProfileData.appearance)
      && validatePersonality(mySelfDateProfileData.personality)
      && validateHobby(mySelfDateProfileData.hobby)
      && validateDateStyle(mySelfDateProfileData.dateStyle)
      && validateIdealType(mySelfDateProfileData.idealType);
    
      if (isValid) {
        selsoListStore.updateMySelsoProfile(mySelfDateProfileData)
          .then((res) => {
            if (res.status === 200) {
              alert('수정이 완료되었습니다!');
            } else {
              alert('수정이 실패하였습니다!');
            }
          });
      };
  };
  
  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={selsoListStore.mySelsoProfile.image} nickname={selsoListStore.mySelsoProfile.nickname} />

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <Input
              value={mySelfDateProfileData.chatLink || ''}
              onChange={setForm('chatLink')}
              validationMessage={chatLinkValidationMessage}
              onFocus={() => setChatLinkValidationMessage('')}
              onBlur={() => validateChatLink(mySelfDateProfileData.chatLink)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <Input
              value={mySelfDateProfileData.tags || ''}
              onChange={setForm('tags')}
              validationMessage={tagsValidationMessage}
              onFocus={() => setTagsValidationMessage('')}
              onBlur={() => validateTags(mySelfDateProfileData.tags)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <Input
              value={mySelfDateProfileData.oneSentence || ''}
              onChange={setForm('oneSentence')}
              validationMessage={oneSentenceValidationMessage}
              onFocus={() => setOneSentenceValidationMessage('')}
              onBlur={() => validateOneSentence(mySelfDateProfileData.oneSentence)}
            />
          </div>
        </section>

        <div className={styles.separator} />

        <section className={styles.sectionWrapper}>
          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>외모 / 스타일</div>
            <Textarea
              value={mySelfDateProfileData.appearance || ''}
              onChange={setForm('appearance')}
              onFocus={() => setAppearanceValidationMessage('')}
              onBlur={() => validateAppearance(mySelfDateProfileData.appearance)}
              maxLength={selsoFieldsMaxLengthLimit.Appearance}
            />
            <TextLengthBox 
              textLength={mySelfDateProfileData.appearance?.length || 0}
              minLength={selsoFieldsMinLengthLimit.Appearance}
              maxLength={selsoFieldsMaxLengthLimit.Appearance}
              validationMessage={appearanceValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <Textarea
              value={mySelfDateProfileData.personality || ''}
              onChange={setForm('personality')}
              onFocus={() => setPersonalityValidationMessage('')}
              onBlur={() => validatePersonality(mySelfDateProfileData.personality)}
              maxLength={selsoFieldsMaxLengthLimit.Personality}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.personality?.length || 0}
              minLength={selsoFieldsMinLengthLimit.Personality}
              maxLength={selsoFieldsMaxLengthLimit.Personality}
              validationMessage={personalityValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <Textarea
              value={mySelfDateProfileData.hobby || ''}
              onChange={setForm('hobby')}
              onFocus={() => setHobbyValidationMessage('')}
              onBlur={() => validateHobby(mySelfDateProfileData.hobby)}
              maxLength={selsoFieldsMaxLengthLimit.Hobby}
            />
            <TextLengthBox 
              textLength={mySelfDateProfileData.hobby?.length || 0}
              minLength={selsoFieldsMinLengthLimit.Hobby}
              maxLength={selsoFieldsMaxLengthLimit.Hobby}
              validationMessage={hobbyValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <Textarea
              value={mySelfDateProfileData.dateStyle || ''}
              onChange={setForm('dateStyle')}
              onFocus={() => setDateStyleValidationMessage('')}
              onBlur={() => validateDateStyle(mySelfDateProfileData.dateStyle)}
              maxLength={selsoFieldsMaxLengthLimit.DateStyle}
            />
            <TextLengthBox 
              textLength={mySelfDateProfileData.dateStyle?.length || 0}
              minLength={selsoFieldsMinLengthLimit.DateStyle}
              maxLength={selsoFieldsMaxLengthLimit.DateStyle}
              validationMessage={dateStyleValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <Textarea
              value={mySelfDateProfileData.idealType || ''}
              onChange={setForm('idealType')}
              onFocus={() => setIdealTypeValidationMessage('')}
              onBlur={() => validateIdealType(mySelfDateProfileData.idealType)}
              maxLength={selsoFieldsMaxLengthLimit.IdealType}
            />
            <TextLengthBox 
              textLength={mySelfDateProfileData.idealType?.length || 0}
              minLength={selsoFieldsMinLengthLimit.IdealType}
              maxLength={selsoFieldsMaxLengthLimit.IdealType}
              validationMessage={idealTypeValidationMessage}
            />
          </div>
        </section>
        <div className={styles.buttonWrapper}>
          <Btn 
            onClick={update}
            type={"Filled"}  
          >수정하기</Btn>
        </div>
      </div>
      :
      null
  );
}));

import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import { ProfileCard } from 'src/modules/MyPage/ProfileCard/ProfileCard';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import Input from 'src/components/Form/Input';
import Modal from 'src/components/Modal';
import { selsoFieldsMaxLengthLimit, selsoFieldsMinLengthLimit } from 'src/constants/fieldsLengthLimits';
import {
  getChatLinkValidationMessage,
  getLengthValidationMessage,
  getOneSentenceValidationMessage,
  getTagsValidationMessage
} from 'src/utils/validations';

import styles from './MyProfile.module.scss';
import Btn from 'src/components/Button/Btn';
import RadioSmall from 'src/components/Form/RadioSmall';


const isActiveItemList = [
  {
    displayName: '셀소 자기소개 공개하기',
    value: true,
  },
  {
    displayName: '셀소 자기소개 비공개하기',
    value: false,
  },
];

export const MyProfile = inject('userStore', 'selsoListStore')(observer(({ userStore, selsoListStore }) => {

  const [updateMessage, setUpdateMessage] = useState('');

  const [mySelfDateProfileData, setMySelfDateProfileData] = useState({
    id: -1,
    chatLink: '',
    tags: '',
    oneSentence: '',
    appearance: '',
    personality: '',
    hobby: '',
    dateStyle: '',
    idealType: '',
    isActive: true,
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

  const setForm = (key) => (event) =>
    setMySelfDateProfileData({ ...mySelfDateProfileData, [key]: event.target.value });

  const setRadioForm = (key) => (value) => (_event) => {
    setMySelfDateProfileData({
      ...mySelfDateProfileData,
      [key]: value,
    });
  };

  const validateChatLink = (data) => {
    const validationMessage = getChatLinkValidationMessage(data);
    setChatLinkValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validateTags = (data) => {
    const validationMessage = getTagsValidationMessage(data);
    setTagsValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validateOneSentence = (data) => {
    const validationMessage = getOneSentenceValidationMessage(data);
    setOneSentenceValidationMessage(validationMessage);

    return oneSentenceValidationMessage === '';
  };

  const validateAppearance = (data) => {
    const validationMessage = getLengthValidationMessage(
      selsoFieldsMinLengthLimit.Appearance, selsoFieldsMaxLengthLimit.Appearance, data
    );
    setAppearanceValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validatePersonality = (data) => {
    const validationMessage = getLengthValidationMessage(
      selsoFieldsMinLengthLimit.Personality, selsoFieldsMaxLengthLimit.Personality, data
    );
    setPersonalityValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validateHobby = (data) => {
    const validationMessage = getLengthValidationMessage(
      selsoFieldsMinLengthLimit.Hobby, selsoFieldsMaxLengthLimit.Hobby, data
    );
    setHobbyValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validateDateStyle = (data) => {
    const validationMessage = getLengthValidationMessage(
      selsoFieldsMinLengthLimit.DateStyle, selsoFieldsMaxLengthLimit.DateStyle, data
    );
    setDateStyleValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const validateIdealType = (data) => {
    const validationMessage = getLengthValidationMessage(
      selsoFieldsMinLengthLimit.IdealType, selsoFieldsMaxLengthLimit.IdealType, data
    );
    setIdealTypeValidationMessage(validationMessage);

    return validationMessage === '';
  };

  const getIsValidMySelfDateProfileData = () => {
    let isValid = true;
    isValid = validateChatLink(mySelfDateProfileData.chatLink) && isValid;
    isValid = validateTags(mySelfDateProfileData.tags) && isValid;
    isValid = validateOneSentence(mySelfDateProfileData.oneSentence) && isValid;
    isValid = validateAppearance(mySelfDateProfileData.appearance) && isValid;
    isValid = validatePersonality(mySelfDateProfileData.personality) && isValid;
    isValid = validateHobby(mySelfDateProfileData.hobby) && isValid;
    isValid = validateDateStyle(mySelfDateProfileData.dateStyle) && isValid;
    isValid = validateIdealType(mySelfDateProfileData.idealType) && isValid;

    return isValid;
  };

  const update = () => {
    if (getIsValidMySelfDateProfileData()) {
      selsoListStore.updateMySelsoProfile(mySelfDateProfileData)
        .then((res) => {
          if (res.status === 200) {
            setUpdateMessage('수정이 완료되었습니다!');
          } else {
            setUpdateMessage('잠시 후 다시 시도해주세요.');
          }
        });
    }
  };
  
  return (
    userStore.isLoggedIn ?
      <div>
        <ProfileCard imageSrc={selsoListStore.mySelsoProfile.image} nickname={selsoListStore.mySelsoProfile.nickname} />

        <section className={styles.sectionWrapper}>
          <div className={styles.inputWrapper}>
            <RadioSmall
              label={'셀소 자기소개 공개'}
              itemList={isActiveItemList}
              selectedItemValue={mySelfDateProfileData.isActive}
              selectItemValue={setRadioForm('isActive')}
              isNeedValidationMessagePlace={false}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>오픈카카오 링크</div>
            <Input
              value={mySelfDateProfileData.chatLink}
              onChange={setForm('chatLink')}
              validationMessage={chatLinkValidationMessage}
              onFocus={() => setChatLinkValidationMessage('')}
              onBlur={() => validateChatLink(mySelfDateProfileData.chatLink)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>태그</div>
            <Input
              value={mySelfDateProfileData.tags}
              onChange={setForm('tags')}
              validationMessage={tagsValidationMessage}
              onFocus={() => setTagsValidationMessage('')}
              onBlur={() => validateTags(mySelfDateProfileData.tags)}
            />
          </div>

          <div className={styles.inputWrapper}>
            <div className={styles.label}>한줄 자기소개</div>
            <Input
              value={mySelfDateProfileData.oneSentence}
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
              value={mySelfDateProfileData.appearance}
              onChange={setForm('appearance')}
              onFocus={() => setAppearanceValidationMessage('')}
              onBlur={() => validateAppearance(mySelfDateProfileData.appearance)}
              maxLength={selsoFieldsMaxLengthLimit.Appearance}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.appearance.length}
              minLength={selsoFieldsMinLengthLimit.Appearance}
              maxLength={selsoFieldsMaxLengthLimit.Appearance}
              validationMessage={appearanceValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>성격</div>
            <Textarea
              value={mySelfDateProfileData.personality}
              onChange={setForm('personality')}
              onFocus={() => setPersonalityValidationMessage('')}
              onBlur={() => validatePersonality(mySelfDateProfileData.personality)}
              maxLength={selsoFieldsMaxLengthLimit.Personality}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.personality.length}
              minLength={selsoFieldsMinLengthLimit.Personality}
              maxLength={selsoFieldsMaxLengthLimit.Personality}
              validationMessage={personalityValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>취미 / 여가</div>
            <Textarea
              value={mySelfDateProfileData.hobby}
              onChange={setForm('hobby')}
              onFocus={() => setHobbyValidationMessage('')}
              onBlur={() => validateHobby(mySelfDateProfileData.hobby)}
              maxLength={selsoFieldsMaxLengthLimit.Hobby}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.hobby.length}
              minLength={selsoFieldsMinLengthLimit.Hobby}
              maxLength={selsoFieldsMaxLengthLimit.Hobby}
              validationMessage={hobbyValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>연애관</div>
            <Textarea
              value={mySelfDateProfileData.dateStyle}
              onChange={setForm('dateStyle')}
              onFocus={() => setDateStyleValidationMessage('')}
              onBlur={() => validateDateStyle(mySelfDateProfileData.dateStyle)}
              maxLength={selsoFieldsMaxLengthLimit.DateStyle}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.dateStyle.length}
              minLength={selsoFieldsMinLengthLimit.DateStyle}
              maxLength={selsoFieldsMaxLengthLimit.DateStyle}
              validationMessage={dateStyleValidationMessage}
            />
          </div>

          <div className={styles.textBoxWrapper}>
            <div className={styles.label}>이상형</div>
            <Textarea
              value={mySelfDateProfileData.idealType}
              onChange={setForm('idealType')}
              onFocus={() => setIdealTypeValidationMessage('')}
              onBlur={() => validateIdealType(mySelfDateProfileData.idealType)}
              maxLength={selsoFieldsMaxLengthLimit.IdealType}
            />
            <TextLengthBox
              textLength={mySelfDateProfileData.idealType.length}
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
        <Modal
          isOpen={updateMessage}
          close={()=>setUpdateMessage('')}
        >
          {updateMessage}
        </Modal>
      </div>
      :
      null
  );
}));

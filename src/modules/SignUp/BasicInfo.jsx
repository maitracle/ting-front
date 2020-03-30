import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import RadioSmall from 'src/components/Form/RadioSmall';
import * as universities from 'src/constants/universities';
import { useParams } from 'react-router-dom';


import styles from './BasicInfo.module.scss';
import Btn from 'src/components/Button/Btn';

const genderItemList = [
  {
    displayName: '남학생',
    value: 'MALE',
  },
  {
    displayName: '여학생',
    value: 'FEMALE',
  },
];


const scholarlyStatusItemList = [
  {
    displayName: '재학생',
    value: 'ATTENDING',
  },
  {
    displayName: '휴학생',
    value: 'TAKING_OFF',
  },
];


const BasicInfo = inject('signUpStore')(observer(({ signUpStore }) => {

  const { university } = useParams();

  const [formData, setFormData] = useState({
    nickname: '',
    gender: '',
    age: '',
    university: '',
    campusLocation: '',
    scholarlyStatus: '',
  });

  const setFormDataHandler = (key) => (event) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
    });
  };

  const setRadioDataHandler = (key) => (value) => (_event) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const [campusList, setCampusList] = useState([]);

  useEffect(() => {
    setFormData({
      ...formData,
      university: universities[university.toUpperCase()],
    });
    setCampusList(universities[`${university.toUpperCase()}_CAMPUSES`] || []);
    console.log(universities[`${university.toUpperCase()}_CAMPUSES`] || []);
  }, [university]);

  const [nicknameValidationMessage, setNicknameValidationMessage] = useState('');
  const [genderValidationMessage, setGenderValidationMessage] = useState('');
  const [ageValidationMessage, setAgeValidationMessage] = useState('');
  const [campusLocationValidationMessage, setCampusLocationValidationMessage] = useState('');
  const [scholarlyStatusValidationMessage, setScholarlyStatusValidationMessage] = useState('');

  const validateNickname = (data) => {
    const nicknameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,8}$/;

    if (data.length === 0) {
      setNicknameValidationMessage('닉네임을 입력해주세요.');
      return false;
    } else if (nicknameRegExp.test(data) === false) {
      setNicknameValidationMessage('8자 이하의 한글로 입력해주세요.');
      return false;
    } else {
      setNicknameValidationMessage('');
      return true;
    }
  };

  const validateGender = (data) => {
    if (data.length === 0) {
      setGenderValidationMessage('성별을 선택해주세요.');
      return false;
    } else {
      setGenderValidationMessage('');
      return true;
    }
  };

  const validateAge = (data) => {
    const ageRegExp = /^[1-9][0-9]$/;

    if (data === '') {
      setAgeValidationMessage('나이를 입력해주세요');
      return false;
    } else if (ageRegExp.test(data) === false) {
      setAgeValidationMessage('형식에 맞게 입력해주세요.');
      return false;
    } else if (data < 19) {
      setAgeValidationMessage('19세 이상만 이용 가능합니다.');
      return false;
    } else {
      setAgeValidationMessage('');
      return true;
    }
  };

  const validateCampusLocation = (data) => {
    if (data.length === 0) {
      setCampusLocationValidationMessage('캠퍼스를 선택해주세요.');
      return false;
    } else {
      setCampusLocationValidationMessage('');
      return true;
    }
  };

  const validateScholarlyStatus = (data) => {
    if (data.length === 0) {
      setScholarlyStatusValidationMessage('재학 여부를 선택해주세요.');
      return false;
    } else {
      setScholarlyStatusValidationMessage('');
      return true;
    }
  };

  const validate = (formData) => {
    let isValid = true;
    isValid = validateNickname(formData.nickname) && isValid;
    isValid = validateGender(formData.gender) && isValid;
    isValid = validateAge(formData.age) && isValid;
    isValid = validateCampusLocation(formData.campusLocation) && isValid;
    isValid = validateScholarlyStatus(formData.scholarlyStatus) && isValid;

    return isValid;
  };

  const submit = () => {
    const isValid = validate(formData);
    if (isValid) {
      signUpStore.createProfile(formData)
        // .then((res) => {
        //   if (res.status === 201) {
        //     signUpStore.nextTo();
        //   }
        // })
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div>
        <Input
          label={'닉네임'}
          value={formData.nickname}
          onChange={setFormDataHandler('nickname')}
          validationMessage={nicknameValidationMessage}
          onFocus={() => setNicknameValidationMessage('')}
          onBlur={(event) => validateNickname(event.target.value)}
        />
      </div>

      <div onClick={() => setGenderValidationMessage('')}>
        <RadioSmall
          label={'성별'}
          itemList={genderItemList}
          selectedItemValue={formData.gender}
          selectItemValue={setRadioDataHandler('gender')}
          validationMessage={genderValidationMessage}
        />
      </div>

      <div>
        <Input
          label={'나이'}
          value={formData.age}
          onChange={setFormDataHandler('age')}
          validationMessage={ageValidationMessage}
          onFocus={() => setAgeValidationMessage('')}
          onBlur={e => validateAge(e.target.value)}
        />
      </div>

      <div onClick={() => setCampusLocationValidationMessage('')}>
        <RadioSmall
          label={'소속 캠퍼스'}
          itemList={campusList}
          selectedItemValue={formData.campusLocation}
          selectItemValue={setRadioDataHandler('campusLocation')}
          validationMessage={campusLocationValidationMessage}
        />
      </div>

      <div onClick={() => setScholarlyStatusValidationMessage('')}>
        <RadioSmall
          label={'재학 여부'}
          itemList={scholarlyStatusItemList}
          selectedItemValue={formData.scholarlyStatus}
          selectItemValue={setRadioDataHandler('scholarlyStatus')}
          validationMessage={scholarlyStatusValidationMessage}
        />
      </div>
      <Btn onClick={submit} value={'기본정보 제출'} />
    </div>
  )
}));

export default BasicInfo;

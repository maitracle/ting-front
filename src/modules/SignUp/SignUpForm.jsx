import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';

import styles from './SignUpForm.module.scss';
import RadioSmall from 'src/components/Form/RadioSmall';
import { useParams } from 'react-router-dom';
import * as universities from 'src/constants/universities';
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

const campusLocationItemList = [
  {
    displayName: '홍익대 서울캠퍼스',
    value: 'SEOUL',
  },
  {
    displayName: '연세대 국제캠퍼스',
    value: 'INTERNATIONAL',
  },
  {
    displayName: '연세대 신촌캠퍼스',
    value: 'SINCHON',
  },
];


const scholarlyStatusItemList = [
  {
    displayName: '재학생',
    value: 'ATTENDING',
  },
  {
    displayName: '휴학생',
    value: 'TAKINGOFF',
  },
];


const SignUpForm = inject('signUpStore')(observer(({ signUpStore }) => {

  const { university } = useParams();
  const [campusList, setCampusList] = useState([]);

  useEffect(() => {
    setFormData({
      ...formData,
      university: universities[university.toUpperCase()],
    });
    setCampusList(universities[`${university.toUpperCase()}_CAMPUSES`] || []);
  }, [university]);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
    university: '',
    gender: '',
    campusLocation: '',
    scholarlyStatus: '',
  });

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const [nicknameValidationMessage, setNicknameValidationMessage] = useState('');
  const [genderValidationMessage, setGenderValidationMessage] = useState('');
  const [campusLocationValidationMessage, setCampusLocationValidationMessage] = useState('');
  const [scholarlyStatusValidationMessage, setScholarlyStatusValidationMessage] = useState('');
  
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

  const validateEmail = (data) => {
    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (data.length === 0) {
      setEmailValidationMessage('이메일을 입력해주세요.');
      return false;
    } else if (emailRegExp.test(data) === false) {
      setEmailValidationMessage('잘못된 이메일 형식입니다.');
      return false;
    } else {
      setEmailValidationMessage('');
      return true;
    }
  };

  const validatePassword = (data) => {
    if (data.length === 0) {
      setPasswordValidationMessage('비밀번호를 입력해주세요.');
      return false;
    } else {
      setPasswordValidationMessage('');
      return true;
    }
  };

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
    isValid = validateEmail(formData.email) && isValid;
    isValid = validatePassword(formData.password) && isValid;
    isValid = validateNickname(formData.nickname) && isValid;
    isValid = validateGender(formData.gender) && isValid;
    isValid = validateCampusLocation(formData.campusLocation) && isValid;
    isValid = validateScholarlyStatus(formData.scholarlyStatus) && isValid;

    return isValid;
  };

  const submit = () => {
    const isValid = validate(formData);
    if (isValid) {
      signUpStore.signUp(formData)
      .then((res) => {
        if (res.status === 201) {
          signUpStore.nextTo();
        }
      })
    }
  };

  return (
    <div className={styles.formWrapper}>
      <div>
        <Input
          label={'이메일'}
          value={formData.email}
          onChange={setFormDataHandler('email')}
          validationMessage={emailValidationMessage}
          onFocus={() => setEmailValidationMessage('')}
          onBlur={e => validateEmail(e.target.value)}
        />
      </div>

      <div>
        <Input
          label={'비밀번호'}
          type={'password'}
          value={formData.password}
          onChange={setFormDataHandler('password')}
          validationMessage={passwordValidationMessage}
          onFocus={() => setPasswordValidationMessage('')}
          onBlur={e => validatePassword(e.target.value)}
        />
      </div>

      <div>
        <Input
          label={'닉네임'}
          value={formData.nickname}
          onChange={setFormDataHandler('nickname')}
          validationMessage={nicknameValidationMessage}
          onFocus={() => setNicknameValidationMessage('')}
          onBlur={e => validateNickname(e.target.value)}
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

      <p className={styles.agreementLink}>
        캠쿠의 이용약관 및 개인정보 처리방침에 동의합니다.
      </p>

      <div className={styles.buttonWrapper}>
        <Btn onClick={submit} value={'다음'} />
      </div>
    </div>
  );
}));

export default SignUpForm;

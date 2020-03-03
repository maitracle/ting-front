import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';

import styles from './SignUpForm.module.scss';
import RadioSmall from 'src/components/Form/RadioSmall';


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

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
    gender: '',
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

  const submit = () => {
    signUpStore.signUp(formData)
      .then((res) => {
        if (res.status === 201) {
          signUpStore.nextTo();
        }
      })
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <Input
          label={'이메일'}
          value={formData.email}
          onChange={setFormDataHandler('email')}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label={'비밀번호'}
          type={'password'}
          value={formData.password}
          onChange={setFormDataHandler('password')}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label={'닉네임'}
          value={formData.nickname}
          onChange={setFormDataHandler('nickname')}
        />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall
          label={'성별'}
          itemList={genderItemList}
          selectedItemValue={formData.gender}
          selectItemValue={setRadioDataHandler('gender')}
        />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall
          label={'소속 캠퍼스'}
          itemList={campusLocationItemList}
          selectedItemValue={formData.campusLocation}
          selectItemValue={setRadioDataHandler('campusLocation')}
        />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall
          label={'재학 여부'}
          itemList={scholarlyStatusItemList}
          selectedItemValue={formData.scholarlyStatus}
          selectItemValue={setRadioDataHandler('scholarlyStatus')}
        />
      </div>

      <p className={styles.agreementLink}>
        캠쿠의 이용약관 및 개인정보 처리방침에 동의합니다.
      </p>

      {/*<button onClick={}>{'<'}</button>*/}
      <button onClick={submit}>다음</button>
    </div>
  );
}));

export default SignUpForm;

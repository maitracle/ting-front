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


const SignUpForm = inject('signUpStore')(observer(({ signUpStore }) => {
  const setEmail = (e) => signUpStore.setEmail(e.target.value);
  const setPassword = (e) => signUpStore.setPassword(e.target.value);
  const setNickname = (e) => signUpStore.setNickname(e.target.value);
  const setGender = (gender) => (_event) => signUpStore.setGender(gender);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nickname: '',
    gender: '',
    campus: '',
    scholarlyStatus: '',
  });

  const setFormDataHandler = (key) => (event) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
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
          value={signUpStore.formData.password}
          onChange={setPassword}
        />
      </div>

      <div className={styles.inputWrapper}>
        <Input
          label={'닉네임'}
          value={signUpStore.formData.nickname}
          onChange={setNickname}
        />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall label={'성별'} itemList={genderItemList} selectedItemValue={signUpStore.formData.gender} selectItemValue={(value) => setGender(value)} />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall label={'소속 캠퍼스'} itemList={genderItemList} selectedItemValue={signUpStore.formData.gender} selectItemValue={(value) => setGender(value)} />
      </div>

      <div className={styles.inputWrapper}>
        <RadioSmall label={'재학 여부'} itemList={genderItemList} selectedItemValue={signUpStore.formData.gender} selectItemValue={(value) => setGender(value)} />
      </div>

      <p>
        캠쿠의 이용약관 및 개인정보 처리방침에 동의합니다.
      </p>

      <button onClick={signUpStore.signUp}>sign up</button>
      <button onClick={signUpStore.nextTo}>nextTo</button>
    </div>
  );
}));

export default SignUpForm;

import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import Input from 'src/components/Form/Input';
import Btn from 'src/components/Button/Btn';

import styles from './SignUpForm.module.scss';
import { Modal } from 'src/components/Modal/Modal';


const SignUpForm = inject('signUpStore')(observer(({ signUpStore }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [emailValidationMessage, setEmailValidationMessage] = useState('');
  const [passwordValidationMessage, setPasswordValidationMessage] = useState('');
  const [isOpenSignUpFailModal, setIsOpenSignUpFailModal] = useState(false);


  const setFormDataHandler = (key) => (event) => {
    setFormData({
      ...formData,
      [key]: event.target.value,
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

  const validate = (formData) => {
    let isValid = true;
    isValid = validateEmail(formData.email) && isValid;
    isValid = validatePassword(formData.password) && isValid;

    return isValid;
  };

  const submit = () => {
    const isValid = validate(formData);
    if (isValid) {
      signUpStore.signUp(formData)
      .then((res) => {
        if (res.status === 400) {
          if (res.data.email) {
            setEmailValidationMessage('이미 회원가입이 완료된 이메일입니다.');
          }
          if (res.data.password) {
            setPasswordValidationMessage('잘못된 비밀번호입니다.');
          }
        } else if(res.status !== 201) {
          setIsOpenSignUpFailModal(true);
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

      <div className={styles.buttonWrapper}>
        <Btn onClick={submit}>다음</Btn>
      </div>

      <Modal isOpen={isOpenSignUpFailModal}>
        문제가 발생하였습니다. <br />
        잠시 후 다시 시도해주세요.
      </Modal>
    </div>
  );
}));

export default SignUpForm;

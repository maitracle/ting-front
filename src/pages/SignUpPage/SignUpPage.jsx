import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import SignUpForm from 'src/modules/SignUp/SignUpForm';
import CheckEmail from 'src/modules/SignUp/CheckEmail';
import MailSent from 'src/modules/SignUp/MailSent';

import styles from './SignUpPage.module.scss';


const mapStepToComponent = {
  SignUp: SignUpForm,
  CheckEmail,
  MailSent,
};

const mapStepToTitle = {
  SignUp: '회원가입',
  CheckEmail: '우리학교 학생 인증하기',
  MailSent: '우리학교 학생 인증하기',
};

const SignUpPage = inject('signUpStore')(observer(({ signUpStore }) => {
  let StepComponent = mapStepToComponent[signUpStore.step];

  useEffect(() => {
    StepComponent = mapStepToComponent[signUpStore.step];
  }, [signUpStore.step]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.title}>
        { mapStepToTitle[signUpStore.step] }
      </div>
      <StepComponent />
    </div>
  );
}));

export default SignUpPage;

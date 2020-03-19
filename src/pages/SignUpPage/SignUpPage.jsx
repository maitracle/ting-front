import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import SignUpForm from 'src/modules/SignUp/SignUpForm';
import CheckEmail from 'src/modules/SignUp/CheckEmail';
import MailSent from 'src/modules/SignUp/MailSent';

import styles from './SignUpPage.module.scss';
import { useParams } from 'react-router-dom';

import { UNIV_LIST } from 'src/constants/universities';


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

const SignUpPage = inject('signUpStore')(observer(({ signUpStore, history }) => {
  let StepComponent = mapStepToComponent[signUpStore.step];

  const { university } = useParams();

  useEffect(() => {
    if (!UNIV_LIST.includes(university.toUpperCase())) {
      history.push('/');
    }
  }, [university]);

  useEffect(() => {
    StepComponent = mapStepToComponent[signUpStore.step];
  }, [signUpStore.step]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.title}>
        { mapStepToTitle[signUpStore.step] }
      </div>
      <div className={styles.componentWrapper}>
        <StepComponent />
      </div>
    </div>
  );
}));

export default SignUpPage;

import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import SignUpForm from 'src/modules/SignUp/SignUpForm';
import CheckEmail from 'src/modules/SignUp/CheckEmail';
import MailSent from 'src/modules/SignUp/MailSent';

import styles from './SignUpPage.module.scss';
import { useParams } from 'react-router-dom';

import { UNIV_LIST } from 'src/constants/universities';
import CheckStudentIdCard from 'src/modules/SignUp/CheckStudentIdCard';


const mapStepToComponent = {
  SignUp: SignUpForm,
  CheckEmail,
  CheckStudentIdCard,
  MailSent,
};

const mapStepToTitle = {
  SignUp: '회원가입',
  CheckEmail: <span>우리학교<br />학생 인증하기</span>,
  CheckStudentIdCard: <span>우리학교<br />학생 인증하기</span>,
  MailSent: <span>우리학교<br />학생 인증하기</span>,
};

const SignUpPage = inject('signUpStore', 'userStore')(observer(({ signUpStore, userStore, history }) => {
  let StepComponent = mapStepToComponent[signUpStore.step];

  const { university } = useParams();

  useEffect(() => {
    if (!UNIV_LIST.includes(university.toUpperCase())) {
      history.push('/');
    }
  }, [university]);

  useEffect(() => {
    if (userStore?.user?.isConfirmedStudent === false) {
      signUpStore.setStep('CheckStudentIdCard');
    } else if (userStore?.user?.isConfirmedStudent === true) {
      history.push('/user/register');
    }
  }, [signUpStore, userStore]);

  useEffect(() => {
    StepComponent = mapStepToComponent[signUpStore.step];
  }, [signUpStore.step]);

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.title}>
        {mapStepToTitle[signUpStore.step]}
      </div>
      <div className={styles.componentWrapper}>
        <StepComponent />
      </div>
    </div>
  );
}));

export default SignUpPage;

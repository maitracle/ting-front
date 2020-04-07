import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import SignUpForm from 'src/modules/SignUp/SignUpForm';
import BasicInfo from 'src/modules/SignUp/BasicInfo';
import CheckEmail from 'src/modules/SignUp/CheckEmail';
import MailSent from 'src/modules/SignUp/MailSent';
import { UNIV_LIST } from 'src/constants/universities';
import CheckStudentIdCard from 'src/modules/SignUp/CheckStudentIdCard';

import styles from './SignUpPage.module.scss';


const mapStepToComponent = {
  SignUp: SignUpForm,
  BasicInfo,
  CheckEmail,
  CheckStudentIdCard,
  MailSent,
};

const mapStepToTitle = {
  SignUp: '회원가입',
  BasicInfo: '기본정보 입력',
  CheckEmail: <span>우리학교<br />학생 인증하기</span>,
  CheckStudentIdCard: <span>우리학교<br />학생 인증하기</span>,
  MailSent: <span>우리학교<br />학생 인증하기</span>,
};

const SignUpPage = inject('signUpStore', 'userStore')(observer(({ signUpStore, userStore, history }) => {
  let StepComponent = mapStepToComponent[signUpStore.step];

  const { university } = useParams();

  useEffect(() => {
    // university params가 invalid하면 main page로 이동한다.
    if (!UNIV_LIST.includes(university.toUpperCase())) {
      history.push('/');
    }
  }, [university]);

  // useEffect(() => {
  //   if (!userStore.profile) {
  //     signUpStore.setStep('BasicInfo');
  //   } else if(userStore?.user?.isConfirmedStudent === false) {
  //     signUpStore.setStep('CheckStudentIdCard');
  //   } else if (userStore?.user?.isConfirmedStudent === true) {
  //     history.push('/user/register');
  //   }
  // }, [signUpStore, userStore.user]);

  useEffect(() => {
    console.log('page effect 발동')
    StepComponent = mapStepToComponent[signUpStore.step];
  }, [signUpStore.step]);

  return (
    <div className={styles.pageWrapper}>
      {console.log('page 시작')}
      {console.log(userStore.user)}
      {console.log(userStore.user.isConfirmedStudent)}
      {console.log('page 끝')}
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

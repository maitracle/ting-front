import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import SignUpForm from 'src/modules/SignUp/SignUpForm';
import CheckEmail from 'src/modules/SignUp/CheckEmail';
import MailSent from 'src/modules/SignUp/MailSent';


const mapStepToComponent = {
  SignUp: SignUpForm,
  CheckEmail,
  MailSent,
};

const SignUpPage = inject('signUpStore')(observer(({ signUpStore }) => {
  let StepComponent = mapStepToComponent[signUpStore.step];

  useEffect(() => {
    StepComponent = mapStepToComponent[signUpStore.step];
  }, [signUpStore.step]);

  return (
    <div>
      <div>
        회원가입
      </div>
      <StepComponent />
    </div>
  );
}));

export default SignUpPage;

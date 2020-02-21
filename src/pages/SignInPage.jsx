import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import SignInForm from 'src/modules/SignIn/SignInForm';
import CheckEmail from 'src/modules/SignIn/CheckEmail';
import MailSent from 'src/modules/SignIn/MailSent';


const mapStepToComponent = {
  SignIn: SignInForm,
  CheckEmail: CheckEmail,
  MailSent: MailSent,
};

const SignInPage = inject('signInStore')(observer(({ signInStore }) => {
  let StepComponent = mapStepToComponent[signInStore.step];

  useEffect(() => {
    StepComponent = mapStepToComponent[signInStore.step];
  }, [signInStore.step]);

  return (
    <div>
      <div>
        회원가입
      </div>
      <StepComponent />
    </div>
  );
}));

export default SignInPage;

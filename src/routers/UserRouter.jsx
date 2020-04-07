import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';


export default inject('userStore', 'signUpStore')(observer(({ userStore, signUpStore }) => {
  const setStep = () => {
    if (userStore.user.id) {
      if (userStore.profile.id) {
        if (userStore?.user?.isConfirmedStudent === true) {
          console.log('1')
          return true;
        }
        console.log('2')
        signUpStore.setStep('CheckStudentIdCard');
        return false;
      } else {
        console.log('3')
        signUpStore.setStep('BasicInfo');
        return false;
      }
    }
    return false;
  }

  // let a = false;
  // const [x, setX] = useState(false);

  useEffect(()=>{
    // if (userStore.profile) {
    //   if (userStore?.user?.isConfirmedStudent === true) {
    //     console.log('1')
    //     setX(true);
    //     return;
    //   }
    //   console.log('2')
    //   signUpStore.setStep('CheckStudentIdCard');
    //   setX(false);
    // } else {
    //   console.log('3')
    //   signUpStore.setStep('BasicInfo');
    //   setX(false);
    // }
    console.log('뭐지')
  }, [userStore.user, userStore.profile])

  return (
    <Switch>
      <Route path="/user/log-in" exact component={LogInPage} />
      <Route path="/user/sign-up/:university" exact 
        render = {
          ()=>(setStep() === true ? (<Redirect to='/user/register' />) : (<SignUpPage />))
        }
      />
      <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
      <Route path="/user/register" exact component={RegisterPage} />
      <Route path="/user/register/complete" exact component={RegisterCompletePage} />
    </Switch>
  )
}));

import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import RegisterPage from 'src/pages/Selso/RegisterPage';
import RegisterCompletePage from 'src/pages/Selso/RegisterCompletePage';
import LogInPage from 'src/pages/User/LogInPage';
import EmailConfirmPage from 'src/pages/User/UserConfirmPage';
import SignUpPage from 'src/pages/User/SignUpPage';
import SignUpStore from '../stores/SignUpStore';


export default inject('userStore')(observer(({ userStore }) => {
  useEffect(()=>{}, [SignUpStore.step, userStore.user, userStore.profile])

  const component = () => userStore.user.isConfirmedStudent === true ? <Redirect to="/user/register"/> : <SignUpPage />

  return (
    <Switch>
      <Route path="/user/log-in" exact component={LogInPage} />
      <Route path="/user/sign-up/:university" exact  component={component}
        // render = {
        //   ()=>(setStep() === true ? (<Redirect to='/user/register' />) : (<SignUpPage />))
        // }
      />
      <Route path="/user/email-confirm/:userCode" exact component={EmailConfirmPage} />
      <Route path="/user/register" exact component={RegisterPage} />
      <Route path="/user/register/complete" exact component={RegisterCompletePage} />
    </Switch>
  )
}));

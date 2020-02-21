import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import MainPage from 'src/pages/MainPage';
import LoginPage from 'src/pages/LoginPage';

import './DefaultLayoutRouter.scss';
import GlobalTab from 'src/components/GlobalTab';


export default () => {
  return (
    <div className={'layoutWrapper'}>
      <header>
        <Gnb />
      </header>

      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />

      <GlobalTab />
    </div>
  );
}

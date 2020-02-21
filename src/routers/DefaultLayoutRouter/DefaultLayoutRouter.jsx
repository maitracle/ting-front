import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import GlobalTab from 'src/components/GlobalTab';
import MainPage from 'src/pages/MainPage';
import LoginPage from 'src/pages/LoginPage';
import SelsoListPage from 'src/pages/SelsoListPage';

import './DefaultLayoutRouter.scss';



export default () => {
  return (
    <div className={'layoutWrapper'}>
      <header>
        <Gnb />
      </header>

      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/selsolist" exact component={SelsoListPage} />

      <GlobalTab />
    </div>
  );
};

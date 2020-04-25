import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserRouter from 'src/routers/UserRouter';
import DefaultLayoutRouter from './DefaultLayoutRouter';
import SelsoDetailPage from 'src/pages/Selso/SelsoDetailPage';
import FroshDetailPage from 'src/pages/Frosh/FroshDetailPage';
import Gnb from 'src/components/Gnb';
import getNeedLogInPage from 'src/utils/getNeedLogInPage';
import { inject, observer } from 'mobx-react';


export default inject('userStore')(observer(({ userStore }) => (
  <Router>
    <header>
      <Gnb />
    </header>
    <main>
      <Switch>
        <Route path="/user" component={UserRouter} />

        {/* 셀소 디테일은 default layout과 다른 레이아웃을 사용하므로 DefaultLayoutRouter에서 분리 */}
        <Route path="/selso/detail" exact component={getNeedLogInPage(SelsoDetailPage, userStore.isLoggedIn)} />
        <Route path="/frosh/:froshProfileId" exact component={getNeedLogInPage(FroshDetailPage, userStore.isLoggedIn)} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
)));

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import UserRouter from 'src/routers/UserRouter';
import DefaultLayoutRouter from './DefaultLayoutRouter';
import SelsoDetailPage from 'src/pages/Selso/SelsoDetailPage';
import FroshDetailPage from 'src/pages/Frosh/FroshDetailPage';
import Gnb from 'src/components/Gnb';


export default () => (
  <Router>
    <header>
      <Gnb />
    </header>
    <main>
      <Switch>
        <Route path="/user" component={UserRouter} />

        {/* 셀소 디테일은 default layout과 다른 레이아웃을 사용하므로 DefaultLayoutRouter에서 분리 */}
        <Route path="/selso/detail" exact component={SelsoDetailPage} />
        <Route path="/frosh/:froshProfileId" exact component={FroshDetailPage} />
        <Route path="/" component={DefaultLayoutRouter} />
      </Switch>
    </main>
  </Router>
);

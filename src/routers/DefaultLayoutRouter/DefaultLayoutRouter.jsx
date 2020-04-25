import React from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import MainPage from 'src/pages/MainPage';
import SelsoListPage from 'src/pages/Selso/SelsoListPage';
import MyList from 'src/pages/MyPage/List';
import MyProfile from 'src/pages/MyPage/Profile';
import MyPoint from 'src/pages/MyPage/Point';
import FroshListPage from 'src/pages/Frosh/FroshListPage';
import getNeedLogInPage from 'src/utils/getNeedLogInPage';


export default inject('userStore')(observer(({ userStore }) => {
  return (
    <>
      <Route path="/" exact component={MainPage} />

      <Route path="/selso" exact component={getNeedLogInPage(SelsoListPage, userStore.isLoggedIn)} />

      <Route path="/frosh" exact component={getNeedLogInPage(FroshListPage, userStore.isLoggedIn)} />

      <Route path="/my" exact component={getNeedLogInPage(MyList, userStore.isLoggedIn)} />
      <Route path="/my/profile" exact component={getNeedLogInPage(MyProfile, userStore.isLoggedIn)} />
      <Route path="/my/point" exact component={getNeedLogInPage(MyPoint, userStore.isLoggedIn)} />
    </>
  );
}));

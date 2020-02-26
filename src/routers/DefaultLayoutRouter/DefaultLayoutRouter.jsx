import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import GlobalTab from 'src/components/GlobalTab';
import MainPage from 'src/pages/MainPage';
import LoginPage from 'src/pages/LoginPage';
import SelsoListPage from 'src/pages/SelsoListPage';

import './DefaultLayoutRouter.scss';
import MyList from 'src/pages/MyPage/List';
import MyProfile from 'src/pages/MyPage/Profile';
import MyDia from 'src/pages/MyPage/Dia';
import MyQuestion from 'src/pages/MyPage/Question';
import MyReview from 'src/pages/MyPage/Review';


export default () => {
  return (
    <div className={'layoutWrapper'}>
      <header>
        <Gnb />
      </header>

      <Route path="/" exact component={MainPage} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/selso" exact component={SelsoListPage} />

      <Route path="/my" exact component={MyList} />
      <Route path="/my/profile" exact component={MyProfile} />
      <Route path="/my/dia" exact component={MyDia} />
      <Route path="/my/question" exact component={MyQuestion} />
      <Route path="/my/review" exact component={MyReview} />

      <div className={'blankBox'} />

      <GlobalTab />
    </div>
  );
};

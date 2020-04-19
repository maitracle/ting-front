import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import GlobalTab from 'src/components/GlobalTab';
import MainPage from 'src/pages/MainPage';
import SelsoListPage from 'src/pages/Selso/SelsoListPage';
import MyList from 'src/pages/MyPage/List';
import MyProfile from 'src/pages/MyPage/Profile';
import MyPoint from 'src/pages/MyPage/Point';
import MyQuestion from 'src/pages/MyPage/Question';
import MyReview from 'src/pages/MyPage/Review';
import FroshListPage from 'src/pages/Frosh/FroshListPage';

import styles from './DefaultLayoutRouter.module.scss';


export default () => (
  <div className={styles.layoutWrapper}>
    <header>
      <Gnb />
    </header>
    <div className={styles.gnbBlankBox} />

    <Route path="/" exact component={MainPage} />

    <Route path="/selso" exact component={SelsoListPage} />

    <Route path="/frosh" exact component={FroshListPage} />

    <Route path="/my" exact component={MyList} />
    <Route path="/my/profile" exact component={MyProfile} />
    <Route path="/my/point" exact component={MyPoint} />
    <Route path="/my/question" exact component={MyQuestion} />
    <Route path="/my/review" exact component={MyReview} />

    <div className={styles.blankBox} />

    <GlobalTab />
  </div>
);

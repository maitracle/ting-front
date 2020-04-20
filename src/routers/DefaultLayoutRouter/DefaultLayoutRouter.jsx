import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from 'src/pages/MainPage';
import SelsoListPage from 'src/pages/Selso/SelsoListPage';
import MyList from 'src/pages/MyPage/List';
import MyProfile from 'src/pages/MyPage/Profile';
import MyPoint from 'src/pages/MyPage/Point';
import MyQuestion from 'src/pages/MyPage/Question';
import MyReview from 'src/pages/MyPage/Review';
import FroshListPage from 'src/pages/Frosh/FroshListPage';


export default () => {
  return (
    <>
      <Route path="/" exact component={MainPage} />

      <Route path="/selso" exact component={SelsoListPage} />

      <Route path="/frosh" exact component={FroshListPage} />

      <Route path="/my" exact component={MyList} />
      <Route path="/my/profile" exact component={MyProfile} />
      <Route path="/my/point" exact component={MyPoint} />
      <Route path="/my/question" exact component={MyQuestion} />
      <Route path="/my/review" exact component={MyReview} />
    </>
  );
};

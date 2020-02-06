import React from 'react';

import MainPage from '../pages/MainPage';
import AnotherPage from '../pages/AnotherPage';
import Gnb from '../components/Gnb';
import { Route } from 'react-router-dom';


export default () => {
  return (
    <>
      <header>
        <Gnb />
      </header>

      <Route path="/" exact component={MainPage} />
      <Route path="/another" exact component={AnotherPage} />

      <footer>
        <div>
          default router footer
        </div>
      </footer>
    </>
  );
}

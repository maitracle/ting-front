import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import MainPage from 'src/pages/MainPage';
import AnotherPage from 'src/pages/AnotherPage';
import LoginPage from 'src/pages/LoginPage';


export default () => {
  return (
    <>
      <header>
        <Gnb />
      </header>

      <Route path="/" exact component={MainPage} />
      <Route path="/another" exact component={AnotherPage} />
      <Route path="/login" exact component={LoginPage} />

      <footer>
        <div>
          default router footer
        </div>
      </footer>
    </>
  );
}

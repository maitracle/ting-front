import React from 'react';
import { Route } from 'react-router-dom';

import Gnb from 'src/components/Gnb';
import MainPage from 'src/pages/MainPage';
import AnotherPage from 'src/pages/AnotherPage';


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

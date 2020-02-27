import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './GlobalTab.scss';


const TabItem = withRouter(({ name, linkTo }) => (
  <Link to={linkTo} className={'tabLink'}>
    <div className={'tabItem ' + (location.pathname.startsWith(linkTo) ? ' selected' : '')}>
      {name}
    </div>
  </Link>
));

export const GlobalTab = () => {
  return (
    <div className={'tabWrapper'}>
      <TabItem name={'List'} linkTo={'/selso'} />
      <TabItem name={'ZZim'} linkTo={'/zzim'} />
      <TabItem name={'MyPage'} linkTo={'/my'} />
    </div>
  );
};

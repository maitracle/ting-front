import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import './GlobalTab.scss';

const TabItem = withRouter(({ name, linkTo }) => {
  return (
    <Link to={linkTo} className={'tabLink'}>
      <div className={'tabItem ' + (linkTo === location.pathname ? ' selected': '')}>
        {name}
      </div>
    </Link>
  )

});

export const GlobalTab = () => {
  return (
    <div className={'tabWrapper'}>
      <TabItem name={'Home'} linkTo={'/'} />
      <TabItem name={'ZZim'} linkTo={'/zzim'} />
      <TabItem name={'MyPage'} linkTo={'/mypage'} />
    </div>
  );
};

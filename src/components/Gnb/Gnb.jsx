import React from 'react';
import { Link } from 'react-router-dom';

import './Gnb.scss';

export const Gnb = () => {
  return (
    <>
      <div className="title">
        GNB
        <div className="title-sub">sub title</div>
      </div>
      <Link to="/">/</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/another">/another</Link>
    </>
  );
};

import React from 'react';
import { Link } from 'react-router-dom';

import './Gnb.scss';

export const Gnb = () => (
  <>
    <div className="title">
        GNB
      <div className="title-sub">sub title</div>
    </div>
    <Link to="/">/</Link>
&nbsp;&nbsp;&nbsp;
    <Link to="/login">/login</Link>
&nbsp;&nbsp;&nbsp;
    <Link to="/selsolist">Selsolist</Link>
&nbsp;&nbsp;&nbsp;
  </>
);

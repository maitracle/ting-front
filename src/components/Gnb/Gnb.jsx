import React from 'react';
import { Link } from 'react-router-dom';

import './Gnb.scss';

export const Gnb = () => (
  <>
    <div className="title">
        GNB
      <div className="title-sub">sub title</div>
    </div>
    <Link to="/">/</Link>{'   '}
    <Link to="/login">/login</Link>{'   '}
    <Link to="/selso">Selso</Link>{'   '}
  </>
);

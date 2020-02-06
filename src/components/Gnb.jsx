import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <div>
        GNB
      </div>
      <Link to="/">/</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/another">/another</Link>
    </>
  );
}

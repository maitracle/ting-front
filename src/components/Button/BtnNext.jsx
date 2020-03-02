import React from 'react';
import './BtnNext.scss';


const BtnNext = ({ onClick, value, type }) => (
  <button className={'btnNext' + `${type || ''}`} type="button" onClick={onClick}>
    {value}
  </button>
);

export default BtnNext;

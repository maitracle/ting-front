import React from 'react';
import './Btn.scss';


const Btn = ({ onClick, value, type }) => (
  <button className={'btn' + `${type || ''}`} type="button" onClick={onClick}>
    {value}
  </button>
);

export default Btn;

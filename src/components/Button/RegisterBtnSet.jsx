import React from 'react';
import BtnPrev from './BtnPrev';
import BtnNext from './BtnNext';
import './RegisterBtnSet.scss';

const RegisterBtnSet = ({ onClick, value, type }) => (
  <div className="btnWrapper">
    <BtnPrev />
    <BtnNext onClick={onClick} value={value} type={type} />
  </div>
);
export default RegisterBtnSet;

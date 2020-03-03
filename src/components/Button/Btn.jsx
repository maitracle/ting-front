import React from 'react';
import styles from './Btn.module.scss';


const Btn = ({ onClick, value, type }) => (
  <button className={`${styles.btnDefault} ${type ? styles[`btn${type}`] : ''}`} type="button" onClick={onClick}>
    {value}
  </button>
);

export default Btn;

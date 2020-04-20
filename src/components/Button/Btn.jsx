import React from 'react';
import styles from './Btn.module.scss';


const Btn = ({ onClick, children, type }) => (
  <button className={`${styles.btnDefault} ${type ? styles[`btn${type}`] : ''}`} type="button" onClick={onClick}>
    { children }
  </button>
);

export default Btn;

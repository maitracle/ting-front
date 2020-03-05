import React from 'react';

import styles from './Input.module.scss';

const Input = ({
  label, value, type, onChange, text, placeholder,
}) => (
  <div className={styles[`inputWrapper${type}`]}>
    {
      label
        ? (
          <div className={styles[`label${type}`]}>
            {label}
          </div>
        )
        : null
    }
    <input placeholder={placeholder} value={value} type={type} onChange={onChange} className={`${styles.input} ${styles[type]}`} />
    {text}
  </div>
);

export default Input;

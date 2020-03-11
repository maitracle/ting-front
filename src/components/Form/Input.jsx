import React from 'react';

import styles from './Input.module.scss';

const Input = ({
  label, value, type, onChange, placeholder, align, validationMessage, onBlur, onFocus,
}) => (
  <div className={styles[`inputWrapper${type}`]}>
    {
      label
        ? (
          <div className={styles.label}>
            {label}
          </div>
        )
        : null
    }
    <input placeholder={placeholder} value={value} onChange={onChange} className={validationMessage?styles.invalidInput:styles.input} style={{ textAlign: align }} onBlur={onBlur} onFocus={onFocus}/>
    <div className={styles.validation}>
      <span>{validationMessage}</span>
    </div>
  </div>
);

export default Input;

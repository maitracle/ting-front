import React from 'react';

import styles from './Input.module.scss';


const Input = ({
  label, value, type, onChange, placeholder, align, validationMessage, onBlur, onFocus,
}) => (
  <div className={styles.inputWrapper}>
    {
      label
        ? (
          <div className={styles.label}>
            {label}
          </div>
        )
        : null
    }
    <input type={type} placeholder={placeholder} value={value} onChange={onChange}
           className={`${styles.input} ${validationMessage ? styles.invalidInput : ''}`} style={{ textAlign: align }}
           onBlur={onBlur} onFocus={onFocus} />
    <div className={styles.validation}>
      <span>{validationMessage}</span>
    </div>
  </div>
);

export default Input;

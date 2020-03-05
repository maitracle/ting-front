import React from 'react';

import styles from './Input.module.scss';

const Input = ({
  label, value, type, onChange, placeholder, align
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
    <input placeholder={placeholder} value={value} onChange={onChange} className={styles.input} style={{ textAlign: align }} />
  </div>
);

export default Input;

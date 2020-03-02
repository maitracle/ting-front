import React from 'react';

import styles from  './Input.module.scss';

const Input = ({ label, value, type, onChange }) => (
  <div>
    {
      label ?
        <div className={styles.label}>
          {label}
        </div>
        :
        null
    }
    <input value={value} type={type} onChange={onChange} className={styles.input} />

  </div>
);

export default Input;

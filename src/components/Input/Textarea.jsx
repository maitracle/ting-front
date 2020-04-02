import React from 'react';
import styles from './Textarea.module.scss';

const Textarea = ({ placeholder, value, onChange, onFocus, onBlur, maxLength }) => (
  <div className={styles.textAreaWrapper}>
    <textarea 
      className={styles.textArea}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  </div>
);

export default Textarea;

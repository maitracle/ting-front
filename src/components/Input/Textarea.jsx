import React from 'react';
import styles from './Textarea.module.scss';

const Textarea = ({ placeholder, value, onChange }) => (
  <div className={styles.textAreaWrapper}>
    <textarea className={styles.textArea} placeholder={placeholder} value={value} onChange={onChange} maxLength="1000"/>
  </div>
);

export default Textarea;

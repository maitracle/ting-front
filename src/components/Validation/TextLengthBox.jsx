import React from 'react';
import styles from './TextLengthBox.module.scss';

const TextLengthBox = ({ textLength, maxLength }) => (
  <div className={styles.textLength}>
    {`${textLength}/${maxLength}`}
  </div>
);

export default TextLengthBox;

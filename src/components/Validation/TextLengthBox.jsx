import React from 'react';
import styles from './TextLengthBox.module.scss';

const TextLengthBox = ({ textLength, minLength, maxLength, validationMessage }) => (
  <div className={styles.textLengthWrapper}>
    <span className={styles.validationMessage}>{validationMessage}</span>
    <span className={styles.textLength}>
      <span
        className={`${textLength < minLength ? styles.validationError:''}`}
      >{ textLength }</span>/{ maxLength }
    </span>
  </div>
);

export default TextLengthBox;

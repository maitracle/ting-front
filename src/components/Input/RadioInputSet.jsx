import React from 'react';
import styles from './RadioInputSet.module.scss';

const RadioInput = ({
  id, text, value, checked, onClick,
}) => (
  <div className={`${styles.radioInput} ${checked ? styles.selected : ''}`} onClick={() => onClick(id, value)}>
    {text}
  </div>
);
const RadioInputSet = ({
  radioItemList, onClick, validationMessage, 
}) => (
  <div>
    <div className={styles.radioWrapper}>
      {(radioItemList.map((radioItem) => <RadioInput key={radioItem.id} id={radioItem.id} text={radioItem.text} value={radioItem.value} checked={radioItem.checked} onClick={onClick} />))}
    </div>
    <div className={styles.validation}>
      <span>{validationMessage}</span>
    </div>
  </div>
);


export default RadioInputSet;

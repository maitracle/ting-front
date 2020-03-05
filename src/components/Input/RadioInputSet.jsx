import React from 'react';
import styles from './RadioInputSet.module.scss';

const RadioInput = ({
  id, text, checked, onClick,
}) => (
  <div className={`${styles.radioInput} ${checked ? styles.selected : ''}`} onClick={() => onClick(id, text)}>
    {text}
  </div>
);
const RadioInputSet = ({
  radioItemList, onClick,
}) => (
  <div className={styles.radioWrapper}>
    {(radioItemList.map((radioItem) => <RadioInput key={radioItem.id} id={radioItem.id} text={radioItem.text} checked={radioItem.checked} onClick={onClick} />))}
  </div>
);


export default RadioInputSet;

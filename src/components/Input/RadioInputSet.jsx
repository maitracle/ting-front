import React from 'react';
import styles from './RadioInputSet.module.scss';

const RadioInput = ({
  id, text, checked, onClick,
}) => (
  <div className={`${styles.radioInput} ${checked ? styles.selected : ''}`} checked={checked} onClick={() => onClick(id, text)}>
    {text}
  </div>
);
const RadioInputSet = ({
  radios, onClick,
}) => (
  <div className={styles.radioWrapper}>
    {(radios.map((radio) => <RadioInput id={radio.id} text={radio.text} checked={radio.checked} onClick={onClick} />))}
  </div>
);


export default RadioInputSet;

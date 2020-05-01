import React from 'react';

import styles from  './RadioSmall.module.scss';

const RadioSmall = ({ label, itemList, selectedItemValue, selectItemValue, validationMessage }) => (
  <div>
    {
      label ?
        <div className={styles.label}>
          {label}
        </div>
        :
        null
    }
    <div className={styles.listWrapper}>
      {
        itemList.map((item) =>
          <div
            key={item.value}
            onClick={selectItemValue(item.value)}
            className={styles.radioWrapper}
          >
            <div className={`${styles.circle} ${ selectedItemValue === item.value ? styles.circleSelected : ''}`} />
            <span className={styles.displayName}>{ item.displayName }</span>
          </div>)
      }
    </div>
    {
      typeof validationMessage === "string" ? (
        <div className={styles.validation}>
          <span>{validationMessage}</span>
        </div>
      ) : null
    }
  </div>
);

export default RadioSmall;

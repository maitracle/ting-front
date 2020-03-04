import React from 'react';

import styles from  './RadioSmall.module.scss';

const RadioSmall = ({ label, itemList, selectedItemValue, selectItemValue }) => (
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
  </div>
);

export default RadioSmall;

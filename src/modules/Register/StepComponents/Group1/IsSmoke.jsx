import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

import styles from './Group1.module.scss';


const IsSmoke = inject('registerStore')(
  observer(({ registerStore }) => {
    const setIsSmoke = (value) => registerStore.setRegisterData('isSmoke', value);
    const [radioItemList, setRadioItem] = useState([
      {
        id: 1, text: '비흡연자', value: 'NO', checked: false,
      },
      {
        id: 2, text: '흡연자', value: 'YES', checked: false,
      },
    ]);

    const onClick = useCallback(
      (id, value) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setIsSmoke(value);
      },
      [radioItemList],
    );

    return (
      <div className={styles.componentWrapper}>
        <div className={styles.question}>
          <strong>흡연여부</strong>
를 알려주세요.
        </div>
        <div className={styles.radioInputWrapper}>
          <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
        </div>
      </div>
    );
  }),
);

export default IsSmoke;

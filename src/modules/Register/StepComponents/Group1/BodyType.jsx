import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

import styles from './Group1.module.scss';


const BodyType = inject('registerStore')(
  observer(({ registerStore }) => {
    const setBodyType = (text) => registerStore.setRegisterData('bodyType', text);
    const [radioItemList, setRadioItem] = useState([
      { id: 1, text: '마른', checked: false },
      { id: 2, text: '슬림', checked: false },
      { id: 3, text: '슬림탄탄', checked: false },
      { id: 4, text: '보통', checked: false },
      { id: 5, text: '근육질', checked: false },
      { id: 6, text: '통통', checked: false },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setBodyType(text);
      },
      [radioItemList],
    );
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.question}>
          <strong>체형</strong>을 알려주세요.
        </div>
        <div className={styles.radioInputWrapper}>
          <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
        </div>
      </div>
    );
  }),
);

export default BodyType;

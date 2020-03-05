import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

import styles from './Group1.module.scss';


const Religion = inject('registerStore')(
  observer(({ registerStore }) => {
    const setReligion = (text) => registerStore.setRegisterData('religion', text);
    const [radioItemList, setRadioItem] = useState([
      { id: 1, text: '무교', checked: false },
      { id: 2, text: '기독교', checked: false },
      { id: 3, text: '천주교', checked: false },
      { id: 4, text: '불교', checked: false },
      { id: 5, text: '기타', checked: false },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setReligion(text);
      },
      [radioItemList],
    );
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.question}>
          <strong>종교</strong>를 알려주세요.
        </div>
        <div className={styles.radioInputWrapper}>
          <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
        </div>
      </div>
    );
  }),
);

export default Religion;

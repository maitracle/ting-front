import React, { useCallback, useState } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const BodyType = inject('registerStore')(
  observer(({ registerStore, history }) => {
    const setBodyType = (value) => registerStore.setRegisterData('bodyType', value);
    const [radioItemList, setRadioItem] = useState([
      {
        id: 1, text: '마른', value: 'SKINNY', checked: false,
      },
      {
        id: 2, text: '슬림', value: 'SLIM', checked: false,
      },
      {
        id: 3, text: '슬림탄탄', value: 'SLIMFIT', checked: false,
      },
      {
        id: 4, text: '보통', value: 'NORMAL', checked: false,
      },
      {
        id: 5, text: '근육질', value: 'FIT', checked: false,
      },
      {
        id: 6, text: '통통', value: 'CHUBBY', checked: false,
      },
    ]);

    const onClick = useCallback(
      (id, value) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setBodyType(value);
      },
      [radioItemList],
    );

    return (
      <>
        <div className={styles.componentWrapper}>
          <div className={styles.question}>
            <strong>체형</strong>을 알려주세요.
          </div>
          <div className={styles.radioInputWrapper}>
            <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
          </div>
        </div>
        <RegisterBtnSet history={history} />
      </>
    );
  }),
);

export default BodyType;

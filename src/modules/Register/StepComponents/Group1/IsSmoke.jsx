import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

const IsSmoke = inject('registerStore')(
  observer(({ registerStore }) => {
    const setIsSmoke = (text) => registerStore.setRegisterData('isSmoke', text);
    const [radioItemList, setRadioItem] = useState([
      { id: 1, text: '비흡연자', checked: false },
      { id: 2, text: '흡연자', checked: false },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setIsSmoke(text);
      },
      [radioItemList],
    );

    return (
      <div>
        <p>IsSmokeIsSmokeIsSmoke흡연여부골라주세요</p>
        <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
      </div>
    );
  }),
);

export default IsSmoke;

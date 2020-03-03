import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';


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
      <div>
        <p> ReligionReligionReligion종교선택하세요</p>
        <RadioInputSet radioItemList={radioItemList} onClick={onClick} />
      </div>
    );
  }),
);

export default Religion;

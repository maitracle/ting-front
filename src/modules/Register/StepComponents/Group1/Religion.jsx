import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';


const Religion = inject('registerStore')(
  observer(({ registerStore }) => {
    const setReligion = (text) => registerStore.setRegisterData('religion', text);
    const [radios, setRadio] = useState([
      { id: 1, text: '무교', checked: false },
      { id: 2, text: '기독교', checked: false },
      { id: 3, text: '천주교', checked: false },
      { id: 4, text: '불교', checked: false },
      { id: 5, text: '기타', checked: false },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadio(
          radios.map((radio) => (radio.id === id ? { ...radio, checked: true } : { ...radio, checked: false })),
        );
        setReligion(text);
      },
      [radios],
    );
    return (
      <div>
        <p> ReligionReligionReligion종교선택하세요</p>
        <RadioInputSet radios={radios} onClick={onClick} />
      </div>
    );
  }),
);

export default Religion;

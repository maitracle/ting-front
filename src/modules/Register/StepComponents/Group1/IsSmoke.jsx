import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

const IsSmoke = inject('registerStore')(
  observer(({ registerStore }) => {
    const setIsSmoke = (text) => registerStore.setRegisterData('isSmoke', text);
    const [radios, setRadio] = useState([
      { id: 1, text: '비흡연자', checked: false },
      { id: 2, text: '흡연자', checked: false },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadio(
          radios.map((radio) => (radio.id === id ? { ...radio, checked: true } : { ...radio, checked: false })),
        );
        setIsSmoke(text);
      },
      [radios],
    );

    return (
      <div>
        <p>IsSmokeIsSmokeIsSmoke흡연여부골라주세요</p>
        <RadioInputSet radios={radios} onClick={onClick} />
      </div>
    );
  }),
);

export default IsSmoke;

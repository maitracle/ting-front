/* eslint-disable linebreak-style */
import React, { useState, useCallback } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';

const BodyType = inject('registerStore')(
  observer(({ registerStore }) => {
    const type = 'bodyType';
    const setBodyType = (text) => registerStore.setRegisterData(type, text);
    const [radios, setRadio] = useState([
      {
        id: 1,
        text: '마른',
        checked: true,
      },
      {
        id: 2,
        text: '슬림',
        checked: false,
      },
      {
        id: 3,
        text: '보통',
        checked: false,
      },
    ]);

    const onClick = useCallback(
      (id, text) => {
        setRadio(
          radios.map((radio) => (radio.id === id ? { ...radio, checked: true } : { ...radio, checked: false })),
        );
        setBodyType(text);
      },
      [radios],
    );
    return (
      <div className="survey">
        <RadioInputSet radios={radios} onClick={onClick} />
        <div className="buttonWrap">
          <button onClick={registerStore.backTo}>뒤로</button>
          <button onClick={registerStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);

export default BodyType;

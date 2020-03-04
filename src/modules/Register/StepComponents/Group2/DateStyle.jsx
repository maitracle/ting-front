import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';

const DateStyle = inject('registerStore')(
  observer(({ registerStore }) => {
    const setDateStyle = (e) => registerStore.setRegisterData('dateStyle', e.target.value);
    const placeholder = '120자 이상, 많이 많이 쓸수록 이성분이 매력적으로 생각할거에요 :)';
    return (
      <div>
        <Textarea placeholder={placeholder} value={registerStore.registerData.dateStyle} onChange={setDateStyle} />
      </div>
    );
  }),
);

export default DateStyle;

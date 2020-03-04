import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';

const Hobby = inject('registerStore')(
  observer(({ registerStore }) => {
    const setHobby = (e) => registerStore.setRegisterData('hobby', e.target.value);
    const placeholder = '60자 이상, 많이 많이 쓸수록 이성분이 매력적으로 생각할거에요 :)';
    return (
      <div>
        <Textarea placeholder={placeholder} value={registerStore.registerData.hobby} onChange={setHobby} />
      </div>
    );
  }),
);

export default Hobby;

import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';


const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const setAge = (e) => registerStore.setRegisterData('age', e.target.value);
    return (
      <div>
        <Input
          label="나이를 알려주세요"
          placeholder="20"
          value={registerStore.registerData.age}
          onChange={setAge}
          type="Register"
          text="세"
        />
      </div>
    );
  }),
);

export default Age;

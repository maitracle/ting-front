import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';


const Height = inject('registerStore')(
  observer(({ registerStore }) => {
    const setHeight = (e) => registerStore.setRegisterData('height', e.target.value);
    return (
      <div>
        <Input
          label="키를 알려주세요"
          placeholder="156"
          value={registerStore.registerData.height}
          onChange={setHeight}
          type="Register"
          text="cm"
        />
      </div>
    );
  }),
);

export default Height;

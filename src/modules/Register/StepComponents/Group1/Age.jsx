import React from 'react';
import { inject, observer } from 'mobx-react';

const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div>
        <div>
          <p> AgeAgeAgeAge나이를 입력하세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
      </div>
    );
  }),
);

export default Age;

import React from 'react';
import { inject, observer } from 'mobx-react';

const BodyType = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div className="survey">
        <div className="anwserWrap">
          <p> BodyTypeBodyTypeBodyType 체형을골라주세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
      </div>
    );
  }),
);

export default BodyType;

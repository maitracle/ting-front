import React from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/components/Button/RegisterBtnSet';

const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div className="survey">
        <div className="anwserWrap">
          <p> AgeAgeAgeAge나이를 입력하세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
        <RegisterBtnSet onClick={registerStore.nextTo} value="다음" />
      </div>
    );
  }),
);

export default Age;

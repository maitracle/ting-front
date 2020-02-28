import React from 'react';
import { inject, observer } from 'mobx-react';
import RegisterHeader from 'src/modules/Register/RegisterHeader';

import 'src/modules/Register/StepComponents/ProfileOneStep.scss';
import textInput from 'src/src/components/Input/TextInput';


const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div className="survey">
        <textInput />
        <div className="anwserWrap">
          <p> 한줄표현입력하세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
        <div className="buttonWrap">
          <button onClick={registerStore.backTo}>뒤로</button>
          <button onClick={registerStore.nextTo}>다음</button>
        </div>
      </div>
    );
  }),
);

export default Age;

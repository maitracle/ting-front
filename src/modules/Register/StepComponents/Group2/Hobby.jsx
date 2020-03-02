import React from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Hobby = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setOneSentence(e.target.value);
    return (
      <div className="survey">
        <div className="anwserWrap">
          <p> HobbyHobbyHobbyHobby한줄표현입력하세요</p>
          <input type="text" value={registerStore.registerData.oneline} onChange={setOneSentence} />
        </div>
        <RegisterBtnSet />
      </div>
    );
  }),
);

export default Hobby;

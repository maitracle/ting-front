import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';


const CheckEmail = inject('signUpStore')(observer(({ signUpStore }) => {

  const [univEmail, setUnivEmail] = useState('');

  const setUnivEmailFromEvent = (e) =>{
    setUnivEmail(e.target.value);
  };

  return (
    <div>
      <div>우리 학교 학생 인증하기</div>
      <div>우리 학교 이메일</div>
      <div><input type='text' value={univEmail} onChange={setUnivEmailFromEvent} /></div>
      <button onClick={signUpStore.nextTo}>next to</button>
    </div>
  );
}));

export default CheckEmail;

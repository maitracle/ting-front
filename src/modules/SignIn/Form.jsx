import React from 'react';
import { inject, observer } from 'mobx-react';


const Form = inject('signInStore')(observer(({ signInStore }) => {

  const setEmail = (e) => {
    signInStore.setEmail(e.target.value);
  };

  const setPassword = (e) => {
    signInStore.setPassword(e.target.value);
  };

  const setNickname = (e) => {
    signInStore.setNickname(e.target.value);
  };

  const setGender = (gender) => (_event) => {
    signInStore.setGender(gender);
  };

  const signIn = () => {
    signInStore.signIn()
      .then((output) => {
        console.log(output);
      });
  };

  return (
    <div>
      <div>
        <p>
          이메일
        </p>
        <input type='text' value={signInStore.formData.email} onChange={setEmail} />
      </div>

      <div>
        <p>
          비밀번호
        </p>
        <input type='password' value={signInStore.formData.password} onChange={setPassword} />
      </div>

      <div>
        <p>
          닉네임
        </p>
        <input type='text' value={signInStore.formData.nickname} onChange={setNickname} />
      </div>

      <div>
        <p>
          성별
        </p>
        <button onClick={setGender('MALE')}>남학생</button>
        <button onClick={setGender('FEMALE')}>여학생</button>
      </div>

      <p>
        캠쿠의 이용약관 및 개인정보 처리방침에 동의합니다.
      </p>

      <button onClick={checkData}>check</button>
      <button onClick={signIn}>sign up</button>
    </div>
  );
}));

export default Form;


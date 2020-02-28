import React from 'react';
import { inject, observer } from 'mobx-react';


const SignUpForm = inject('signUpStore')(observer(({ signUpStore }) => {

  const setEmail = (e) => signUpStore.setEmail(e.target.value);
  const setPassword = (e) => signUpStore.setPassword(e.target.value);
  const setNickname = (e) => signUpStore.setNickname(e.target.value);
  const setGender = (gender) => (_event) => signUpStore.setGender(gender);

  return (
    <div>
      <div>
        <p>
          이메일
        </p>
        <input type='text' value={signUpStore.formData.email} onChange={setEmail} />
      </div>

      <div>
        <p>
          비밀번호
        </p>
        <input type='password' value={signUpStore.formData.password} onChange={setPassword} />
      </div>

      <div>
        <p>
          닉네임
        </p>
        <input type='text' value={signUpStore.formData.nickname} onChange={setNickname} />
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

      <button onClick={signUpStore.signUp}>sign up</button>
      <button onClick={signUpStore.nextTo}>nextTo</button>
    </div>
  );
}));

export default SignUpForm;

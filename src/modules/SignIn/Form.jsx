import React, { useState } from 'react';


export default () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
    gender: '',
  });

  const setEmail = (e) => {
    setForm({
      email: e.target.value,
      password: form.password,
      nickname: form.nickname,
      gender: form.gender,
    });
  };

  const setPassword = (e) => {
    setForm({
      email: form.email,
      password: e.target.value,
      nickname: form.nickname,
      gender: form.gender,
    });
  };

  const setNickname = (e) => {
    setForm({
      email: form.email,
      password: form.password,
      nickname: e.target.value,
      gender: form.gender,
    });
  };

  const setGender = (gender) => (_event) => {
    setForm({
      email: form.email,
      password: form.password,
      nickname: form.nickname,
      gender: gender,
    });
  };

  const checkData = () => {
    console.log(form);
  };


  return (
    <div>
      <div>
        <p>
          이메일
        </p>
        <input type='text' value={form.email} onChange={setEmail} />
      </div>

      <div>
        <p>
          비밀번호
        </p>
        <input type='password' value={form.password} onChange={setPassword} />
      </div>

      <div>
        <p>
          닉네임
        </p>
        <input type='text' value={form.nickname} onChange={setNickname} />
      </div>

      <div>
        <p>
          성별
        </p>
        <button onClick={setGender('male')}>남학생</button>
        <button onClick={setGender('female')}>여학생</button>
      </div>

      <p>
        캠쿠의 이용약관 및 개인정보 처리방침에 동의합니다.
      </p>

      <button onClick={checkData}>check</button>
      <button>sign up</button>
    </div>
  );
};

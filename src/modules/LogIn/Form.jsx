import React, { useState } from 'react';
import Input from 'src/components/Form/Input';

import styles from './Form.module.scss';
import Btn from 'src/components/Button/Btn';
import { inject, observer } from 'mobx-react';

const Form = inject('userStore')(observer(({ userStore, history }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');

  const setEmail = (e) => {
    setForm({
      email: e.target.value,
      password: form.password,
    });
  };

  const setPassword = (e) => {
    setForm({
      email: form.email,
      password: e.target.value,
    });
  };

  const logIn = () => {
    userStore.logIn(form.email, form.password)
      .then((res) => {
        if (res.status === 200) {
          history.push('/selso');
        } else if(res.status) {
          setMessage('올바른 아이디와 비밀번호를 입력해주세요.');
        } else {
          setMessage('문제가 발생했습니다. 잠시 후 다시 시도해주세요.');
        }
      });
  };

  return (
    <div>
      <div className={styles.inputWrapper}>
        <Input
          label={'이메일'}
          value={form.email}
          onChange={setEmail}
        />
      </div>
      <div className={styles.inputWrapper}>
        <Input
          label={'비밀번호'}
          value={form.password}
          type="password"
          onChange={setPassword}
        />
        <div className={styles.responseMessage}>
          { message }
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonContentsWrapper}>
          <Btn onClick={logIn}>로그인</Btn>
        </div>
      </div>
    </div>
  );
}));

export default Form;

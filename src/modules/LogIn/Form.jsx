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
        } else {
          setMessage(res.message);
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
      </div>
      <div className={styles.buttonWrapper}>
        <div className={styles.buttonContentsWrapper}>
          <Btn onClick={logIn} value={'로그인'} />
        </div>
      </div>
    </div>
  );
}));

export default Form;

import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import Input from 'src/components/Form/Input';

import styles from './CheckEmail.module.scss';


const CheckEmail = inject('signUpStore')(observer(({ signUpStore }) => {

  const [univEmail, setUnivEmail] = useState('');

  const setUnivEmailFromEvent = (e) =>{
    setUnivEmail(e.target.value);
  };

  const checkUnivEmailHandler = () => {
    signUpStore.checkUnivEmail(univEmail);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <Input
          label={'이메일'}
          value={univEmail}
          onChange={setUnivEmailFromEvent}
        />
      </div>
      <div className={styles.question}>
        아직 학교 이메일이 없으신가요?
      </div>
      <div className={styles.emailMakeLink}>
        1분 만에 학교 이메일 만들러가기
      </div>
      <button onClick={checkUnivEmailHandler}>send email</button>
    </div>
  );
}));

export default CheckEmail;

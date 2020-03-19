import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import Input from 'src/components/Form/Input';

import styles from './CheckEmail.module.scss';
import { useParams } from 'react-router-dom';
import Btn from 'src/components/Button/Btn';


const mapUnivToEmailDomail = {
  HONGIK: '@mail.hongik.ac.kr',
  KYUNGHEE: '@mail.경희대메일좀알려주세요',
  YONSEI: '@mail.연세대메일좀알려주세요',
};

const CheckEmail = inject('signUpStore')(observer(({ signUpStore }) => {
  const { university } = useParams();
  const [univEmail, setUnivEmail] = useState('');
  const [emailCheckFailMessage, setEmailCheckFailMessage] = useState('');

  const setUnivEmailFromEvent = (e) => {
    setUnivEmail(e.target.value);
  };

  const checkUnivEmailHandler = () => {
    signUpStore.checkUnivEmail(`${univEmail}${mapUnivToEmailDomail[university.toUpperCase()]}`)
      .then((res) => {
        if (res?.status === 400 && res?.data?.universityEmail[0] === 'user with this university email already exists.') {
          setEmailCheckFailMessage('이미 인증에 사용된 메일입니다.');
        }
      });
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <div className={styles.fullEmailWrapper}>
          <Input
            label={'이메일'}
            value={univEmail}
            onChange={setUnivEmailFromEvent}
            onFocus={() => setEmailCheckFailMessage('')}
            validationMessage={emailCheckFailMessage}
          />
          <span className={styles.emailDomain}>{mapUnivToEmailDomail[university.toUpperCase()]}</span>
        </div>
      </div>
      <div className={styles.question}>
        아직 학교 이메일이 없으신가요?
      </div>
      <div className={styles.emailMakeLink}>
        1분 만에 학교 이메일 만들러가기
      </div>
      <div className={styles.buttonWrapper}>
        <Btn value={'인증하기'} onClick={checkUnivEmailHandler} />
      </div>
    </div>
  );
}));

export default CheckEmail;

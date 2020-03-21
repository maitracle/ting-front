import React from 'react';

import * as styles from './MailSend.module.scss'

const MainSent = () => (
  <>
    <div className={styles.description}>
      <div>학교 이메일로 이메일이 발송되었습니다!</div>
      <div>이메일함을 확인해주세요 :)</div>
    </div>

    <img src={require('src/assets/images/UserConfirm/postman@3x.png')} className={styles.image} alt='메일 전송 완료' />
  </>
);

export default MainSent;

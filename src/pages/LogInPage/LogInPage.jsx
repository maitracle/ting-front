import React from 'react';
import Form from 'src/modules/LogIn/Form';

import styles from './LogInPage.module.scss';


export default ({ history }) => (
  <div className={styles.pageWrapper}>
    <div className={styles.title}>
      로그인
    </div>
    <div className={styles.formWrapper}>
      <Form history={history} />
    </div>
  </div>
);

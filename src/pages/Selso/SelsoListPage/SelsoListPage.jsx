import React from 'react';
import SelsoList from 'src/modules/SelsoList';

import styles from './SelsoListPage.module.scss';

export const SelsoListPage =  ({ history }) => (
  <div>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>셀프 프로필</h1>
    </div>
    <div className={styles.listWrapper}>
      <SelsoList history={history} />
    </div>
  </div>
);

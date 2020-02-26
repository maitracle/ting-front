import React from 'react';
import SelsoList from 'src/modules/SelsoListModules/SelsoList';

import styles from './SelsoListPage.module.scss';

export const SelsoListPage =  () => (
  <div>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>셀프 프로필</h1>
    </div>
    <SelsoList />
  </div>
);

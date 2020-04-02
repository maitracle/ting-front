import React from 'react';

import FroshList from 'src/modules/FroshList';

import styles from './FroshListPage.module.scss';


const FroshListPage =  () => (
  <div>
    <div className={styles.titleWrapper}>
      <h1 className={styles.title}>신입생 프로필</h1>
    </div>
    <div className={styles.listWrapper}>
      <FroshList />
    </div>
  </div>
);

export default FroshListPage;
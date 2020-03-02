import React from 'react';
import { inject, observer } from 'mobx-react';
import MyDiaHistory from 'src/pages/MyPage/Dia/MyDiaHistory';
import styles from './MyDia.module.scss';

export const MyDia = inject('myDiaStore')(observer(({ myDiaStore }) => {
  return (
    <div>
      <div className={styles.totalDiaWrapper}>
        <div className={styles.diaHistory}>
          포인트 사용내역
        </div>
        <div className={styles.restDiaHeader}>
          Total
        </div>
        <div className={styles.restDiaWrapper}>
          {myDiaStore.restDia} Pts
        </div>
      </div>
      {myDiaStore.myDiaHistory.map((item) => <MyDiaHistory item={item}/>)}
    </div>
  );
  
}));

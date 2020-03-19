import React from 'react';
import { inject, observer } from 'mobx-react';
import MyPointHistory from 'src/pages/MyPage/Point/MyPointHistory';
import styles from './MyPoint.module.scss';

export const MyPoint = inject('myPointStore')(observer(({ myPointStore }) => {
  return (
    <div>
      <div className={styles.totalPointWrapper}>
        <div className={styles.pointHistory}>
          포인트 사용내역
        </div>
        <div className={styles.restPointHeader}>
          Total
        </div>
        <div className={styles.restPointWrapper}>
          {myPointStore.restPoint} Pts
        </div>
      </div>
      {myPointStore.myPointHistoryList.map((item) => <MyPointHistory key={item.id} item={item}/>)}
    </div>
  );
  
}));

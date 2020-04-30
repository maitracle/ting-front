import React from 'react';
import SelsoList from 'src/modules/SelsoList';

import styles from './SelsoListPage.module.scss';
import { SelsoListSkeleton } from 'src/modules/SelsoList/SelsoListSkeleton';


export const SelsoListPage = ({ history }) => {
  const selsoListOpenDate = new Date(2020, 0, 7);

  const isAccessibleSelsoList = () => {
    let today = new Date();

    return today > selsoListOpenDate;
  };

  return (
    <div>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>셀프 프로필</h1>
      </div>
      <div className={styles.listWrapper}>
        {
          isAccessibleSelsoList() ?
            <SelsoList history={history} />
            :
            <SelsoListSkeleton openDate={selsoListOpenDate} history={history} />
        }
      </div>
    </div>
  );
};

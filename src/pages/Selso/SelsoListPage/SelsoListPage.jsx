import React from 'react';
import SelsoList from 'src/modules/SelsoList';

import styles from './SelsoListPage.module.scss';
import { SelsoListSkeleton } from 'src/modules/SelsoList/SelsoListSkeleton';
import { yeungnamSelsoListOpenDate } from 'src/constants/dates';


export const SelsoListPage = ({ history }) => {

  const isAccessibleSelsoList = () => {
    let today = new Date();

    return today > yeungnamSelsoListOpenDate;
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
            <SelsoListSkeleton openDate={yeungnamSelsoListOpenDate} history={history} />
        }
      </div>
    </div>
  );
};

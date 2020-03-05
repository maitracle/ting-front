import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './SelsoDetailPage.module.scss';
import Card from 'src/modules/SelsoDetail/Card';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  useEffect(() => {
    selsoListStore.setSelectedSelsoDetail();
  }, []);

  return (
    <div className={styles.detailWrapper}>
      <Card selsoDetail={selsoListStore.fetchedSelsoDetail} />
    </div>
  )
}));

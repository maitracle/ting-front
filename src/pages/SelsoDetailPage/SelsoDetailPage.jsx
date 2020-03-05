import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './SelsoDetailPage.module.scss';
import Card from 'src/modules/SelsoDetail/Card';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  useEffect(() => {
    if (selsoListStore.choosedSelso) {
      // choosed selso 값이 없을 경우 fetchSelsoDetail function이 undefined를 반환하여 callback을 사용할 수 없다.
      selsoListStore.fetchSelsoDetail()
        .then((res) => {
          if (res?.status === 200) {
            selsoListStore.root.myPointStore.fetchMyPointHistory();
          }
        })
    }
  }, [selsoListStore.choosedSelso]);

  return (
    <div className={styles.detailWrapper}>
      <Card selsoDetail={selsoListStore.fetchedSelsoDetail} />
    </div>
  )
}));

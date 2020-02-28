import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './SelsoDetailPage.module.scss';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  useEffect(() => {
    selsoListStore.fetchSelectedSelsoDetail();
  }, []);

  return (
    <div>
      <div>this is selso detail page</div>
      <div>{ selsoListStore.selectedSelsoId }</div>
    </div>
  )
}));

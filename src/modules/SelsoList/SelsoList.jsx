import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import SelsoItemCard from 'src/modules/SelsoList/SelsoItemCard';
import styles from 'src/modules/SelsoList/SelsoItemCard.module.scss';

const SelsoList = inject('selsoListStore')(observer(({ selsoListStore }) => {
  useEffect(() => {
    selsoListStore.setSelsoList();
  }, []);

  const moveToDetailPage = (id) => (_e) => {
    selsoListStore.setSelectedSelsoId(id);

    return 'selso/detail';
  };

  return selsoListStore.selsoList.map((selsoItem) => (
    <Link to={moveToDetailPage(selsoItem.id)} key={selsoItem.id} className={styles.link}>
      <SelsoItemCard selsoItem={selsoItem} />
    </Link>)
  );
}));

export default SelsoList;

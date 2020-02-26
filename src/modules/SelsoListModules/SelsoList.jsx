import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import SelsoItemCard from 'src/modules/SelsoListModules/SelsoItemCard';

const SelsoList = ({ setSelsoList, selsoList }) => {
  useEffect(() => {
    setSelsoList();
  }, []);

  return selsoList.map((selsoItem) => (
    <SelsoItemCard key={selsoItem.id} selsoItem={selsoItem} />
    )
  );
};

export default inject(({ selsoListStore }) => ({
  setSelsoList: selsoListStore.setSelsoList,
  selsoList: selsoListStore.selsoList,
}))(observer(SelsoList));

import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import SimpleCard from 'src/modules/SelsoListModules/SimpleCard';

const SelsoList = ({ setSelsoList, selsoList }) => {
  useEffect(() => {
    setSelsoList();
  }, []);

  return (
    <div>
      <div>
        {selsoList.map((user) => (
          <SimpleCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default inject(({ selsoListStore }) => ({
  setSelsoList: selsoListStore.setSelsoList,
  selsoList: selsoListStore.selsoList,
}))(observer(SelsoList));

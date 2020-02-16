import React, { useState, useEffect } from "react";
import { inject, observer } from "mobx-react";

const SelsoList = ({ setSelsoList, selsoList, test }) => {
  useEffect(() => {
    setSelsoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      selsolist:{selsoList}
      {test}
    </div>
  );
};
export default inject(({ selsoListStore }) => ({
  setSelsoList: selsoListStore.setSelsoList,
  selsoList: selsoListStore.selsoList,
  test: selsoListStore.test
}))(observer(SelsoList));

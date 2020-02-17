import React, { useState, useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";

const SelsoList = ({ setSelsoList, selsoList, test, getSelsoList }) => {
  useEffect(() => {
    setSelsoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const a = JSON.stringify(selsoList);
  // const b = JSON.parse(a);
  // const c = JSON.parse(JSON.stringify(selsoList));
  useEffect(() => {
    // console.log(JSON.parse(JSON.stringify(selsoList))[0]);
    // console.log(toJS(selsoList, { exportMapsAsObjects: true }));
    console.log("get", typeof getSelsoList()[0]);
  }, [getSelsoList, selsoList]);
  const tojs = toJS(selsoList);
  return (
    <div>
      <p>selsolist:</p>
      {/* {tojs} */}
      {/* {tojslist} */}
      {/* {selsoList} */}
      {/* {selsoList}
      {selsoList}
      {test} */}
    </div>
  );
};

export default inject(({ selsoListStore }) => ({
  setSelsoList: selsoListStore.setSelsoList,
  selsoList: selsoListStore.selsoList,
  test: selsoListStore.test,
  getSelsoList: selsoListStore.getSelsoList
}))(observer(SelsoList));

import React from 'react';
import { inject, observer } from 'mobx-react';

import './MyDia.scss';

const a = (x) => {
  return(
    <div>

    </div>
  )
}

export const MyDia = inject('myDiaStore')(observer(({ myDiaStore }) => {
  return (
    <div>
      <div>
        <div>
          별 사용내역
        </div>
        <div>
          Total
        </div>
        <div>
          별 {myDiaStore.restDia} 개
        </div>
      </div>
    </div>
  );
  
}));

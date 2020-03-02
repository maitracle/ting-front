import React from 'react';
import { inject, observer } from 'mobx-react';
import Btn from 'src/components/Button/Btn';
import './RegisterBtnSet.scss';


const RegisterBtnSet = inject('registerStore')(
  observer(({ registerStore }) => (
    <div className="btnWrapper">
      <div className="btnPrevWrapper">
        <Btn onClick={registerStore.backTo} value="<" type="Prev" />
      </div>
      <div className="btnNextWrapper">
        <Btn onClick={registerStore.nextTo} value="다음" type="Next" />
      </div>
    </div>
  )),
);
export default RegisterBtnSet;

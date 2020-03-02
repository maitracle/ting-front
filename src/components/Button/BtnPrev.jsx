import React from 'react';
import { inject, observer } from 'mobx-react';
import './BtnPrev.scss';


const btnPrev = inject('registerStore')(
  observer(({ registerStore }) => (
    <button className="btnPrev" type="button" onClick={registerStore.backTo}>{'<'}</button>
  )),
);
export default btnPrev;

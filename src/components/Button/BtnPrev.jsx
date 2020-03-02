import React from 'react';
import { inject, observer } from 'mobx-react';

const btnPrev = inject('profileFormStore')(
  observer(({ profileFormStore }) => (
    <button className="btnPrev" type="button" onClick={profileFormStore.backTo}>{'<'}</button>
  )),
);
export default btnPrev;

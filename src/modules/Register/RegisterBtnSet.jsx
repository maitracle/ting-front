import React from 'react';
import { inject, observer } from 'mobx-react';
import Btn from 'src/components/Button/Btn';
import styles from './RegisterBtnSet.module.scss';


const RegisterBtnSet = inject('registerStore')(
  observer(({ registerStore }) => (
    <div className={styles.btnWrapper}>
      <div className={styles.btnPrevWrapper}>
        <Btn onClick={registerStore.backTo} value="<" type="Gray" />
      </div>
      <div className={styles.btnNextWrapper}>
        <Btn onClick={registerStore.nextTo} value="다음" />
      </div>
    </div>
  )),
);
export default RegisterBtnSet;

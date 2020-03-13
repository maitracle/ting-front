import React from 'react';
import { inject, observer } from 'mobx-react';
import Btn from 'src/components/Button/Btn';
import styles from './RegisterBtnSet.module.scss';


const RegisterBtnSet = inject('registerStore')(
  observer(({ backTo, nextTo }) => (
    <>
      <div className={styles.btnWrapper}>
        <div className={styles.btnPrevWrapper}>
          <Btn onClick={backTo} value="<" type="Gray" />
        </div>
        <div className={styles.btnNextWrapper}>
          <Btn onClick={nextTo} value="다음" />
        </div>
      </div>

      <div className={styles.blankBox} />
    </>
  )),
);
export default RegisterBtnSet;

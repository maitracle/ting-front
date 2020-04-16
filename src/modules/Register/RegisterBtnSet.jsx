import React from 'react';
import { inject, observer } from 'mobx-react';
import Btn from 'src/components/Button/Btn';
import { IoIosArrowBack } from 'react-icons/io';

import styles from './RegisterBtnSet.module.scss';


const RegisterBtnSet = inject('registerStore')(
  observer(({ backTo, nextTo }) => (
    <>
      <div className={styles.btnWrapper}>
        <div className={styles.btnPrevWrapper}>
          <Btn onClick={backTo} type="Gray">
            <div>
              <IoIosArrowBack className={styles.contents} />
            </div>
          </Btn>
        </div>
        <div className={styles.btnNextWrapper}>
          <Btn onClick={nextTo}>다음</Btn>
        </div>
      </div>

      <div className={styles.blankBox} />
    </>
  )),
);
export default RegisterBtnSet;

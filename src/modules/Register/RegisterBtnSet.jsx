import React, { forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Btn from 'src/components/Button/Btn';
import { IoIosArrowBack } from 'react-icons/io';

import styles from './RegisterBtnSet.module.scss';


const RegisterBtnSet = inject('registerStore')(
  observer(forwardRef(({ backTo, nextTo }, ref) => {

    return (
      <div className={styles.btnWrapper} ref={ref}>
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
    );
  })),
);

export default RegisterBtnSet;

import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './Group3.module.scss'
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Image = inject('registerStore')(
  observer(({ registerStore }) => {
    return (
      <>
        <div className={styles.componentWrapper}>
          <div>
            대충 이미지 올리는 폼
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo} />
      </>
    );
  }),
);

export default Image;

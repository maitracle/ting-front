import React from 'react';
import { inject, observer } from 'mobx-react';
import styles from './Group3.module.scss'
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Image = inject('registerStore')(
  observer(({ registerStore, history }) => {
    return (
      <>
        <div className={styles.componentWrapper}>
          <div>
            대충 이미지 올리는 폼
          </div>
        </div>
        <RegisterBtnSet history={history} />
      </>
    );
  }),
);

export default Image;

import React from 'react';
import { inject, observer } from 'mobx-react';

import styles from './Group3.module.scss'


const Image = inject('registerStore')(
  observer(({ registerStore }) => {
    return (
      <div className={styles.componentWrapper}>
        <div>
          대충 이미지 올리는 폼
        </div>
      </div>
    );
  }),
);

export default Image;

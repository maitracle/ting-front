import React from 'react';
import { inject, observer } from 'mobx-react';
import TagBox from './TagBox';

import styles from './Group3.module.scss';


const Tags = inject('registerStore')(
  observer(({ registerStore }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    return (
      <div className={styles.componentWrapper}>
        <TagBox setTags={setTags} />
        <span className={styles.tagList}>{registerStore.registerData.tags}</span>
      </div>
    );
  }),
);

export default Tags;

import React from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import TagBox from './TagBox';
import styles from './Group3.module.scss';


const Tags = inject('registerStore')(
  observer(({ registerStore }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    return (
      <>
        <div className={styles.componentWrapper}>
          <TagBox setTags={setTags} />
          <span className={styles.tagList}>{registerStore.registerData.tags}</span>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo} />
      </>
    );
  }),
);

export default Tags;

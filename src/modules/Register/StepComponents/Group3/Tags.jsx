import React from 'react';
import { inject, observer } from 'mobx-react';
import TagBox from './TagBox';
import styles from './Group3.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Tags = inject('registerStore')(
  observer(({ registerStore, history }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    
    return (
      <>
        <div className={styles.componentWrapper}>
          <TagBox setTags={setTags} />
        </div>
        <RegisterBtnSet history={history} />
      </>
    );
  }),
);

export default Tags;

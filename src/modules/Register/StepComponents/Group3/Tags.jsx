import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import TagBox from './TagBox';
import styles from './Group3.module.scss';
import { getTagsValidationMessage } from 'src/utils/validations';


const Tags = inject('registerStore')(
  observer(({ registerStore }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    
    const [tagsValidationMessage, setTagsValidationMessage] = useState('');

    const validateTags = (data) => {
      setTagsValidationMessage(
        getTagsValidationMessage(data)
      );

      return tagsValidationMessage === '';
    }

    const nextTo = () => {
      const isValid = validateTags(registerStore.registerData.tags);
      if (isValid) {
        registerStore.nextTo();
      }
    }

    return (
      <>
        <div className={styles.componentWrapper}>
          <TagBox setTags={setTags} />
          <span className={styles.tagList}>{registerStore.registerData.tags}</span>
          <span className={styles.validationMessage}>
            {tagsValidationMessage}
          </span>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} />
      </>
    );
  }),
);

export default Tags;

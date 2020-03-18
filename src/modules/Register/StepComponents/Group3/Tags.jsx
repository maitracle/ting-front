import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import TagBox from './TagBox';
import styles from './Group3.module.scss';


const Tags = inject('registerStore')(
  observer(({ registerStore }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
<<<<<<< HEAD
    
    const [tagsValidationMessage, setTagsValidationMessage] = useState('');

    const validateTags = (data) => {
      const countTags = data.split(/\s/).length;
      if (countTags < 4) {
        setTagsValidationMessage('태그를 4개 이상 입력해주세요.');
        return false;
      } else if (countTags > 10) {
        setTagsValidationMessage('태그는 10개까지만 입력해주세요.');
        return false;
      }

      setTagsValidationMessage('');
      return true;
    }

    const nextTo = () => {
      const isValid = validateTags(registerStore.registerData.tags);
      if (isValid) {
        registerStore.nextTo();
      }
    }
=======
>>>>>>> master

    return (
      <>
        <div className={styles.componentWrapper}>
          <TagBox setTags={setTags} />
          <span className={styles.tagList}>{registerStore.registerData.tags}</span>
          <span className={styles.validationMessage}>
            {tagsValidationMessage}
          </span>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo} />
      </>
    );
  }),
);

export default Tags;

import React, { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import TagBox from './TagBox';
import styles from './Group3.module.scss';
import { getTagsValidationMessage } from 'src/utils/validations';


const Tags = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    
    const [tagsValidationMessage, setTagsValidationMessage] = useState('');
    

    const validateTags = (data) => {
      const validationMessage = getTagsValidationMessage(data);
      setTagsValidationMessage(validationMessage);

      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateTags(registerStore.registerData.tags);

      if (isValid === true) {
        registerStore.nextTo();
      }
    };

    const setMinHeight = {
      minHeight: `${componentMinHeight}px`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <TagBox setTags={setTags} onFocus={() => setTagsValidationMessage('')} />
          <span className={styles.previewTags}>
            다음과 같이 나타날 예정이에요~<br/>
            {registerStore.registerData.tags}
          </span>
          <br/>
          <span className={styles.validationMessage}>
            {tagsValidationMessage}
          </span>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default Tags;

import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import TagBox from './TagBox';
import styles from './Group3.module.scss';
import { getTagsValidationMessage } from 'src/utils/validations';


const Tags = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const setTags = (tagList) => registerStore.setRegisterData('tags', tagList);
    
    const [tagsValidationMessage, setTagsValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

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

    const componentStyle = {
      minHeight: `calc(${screenHeight}px - 44px - ${headerHeight}px - 125px)`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={componentStyle}>
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

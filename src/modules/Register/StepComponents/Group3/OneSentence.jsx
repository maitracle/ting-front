import React, { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group3.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getOneSentenceValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const OneSentence = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const placeholder = '35자 이내로 자신에 대해 표현해주세요 :)';
    const [oneSentenceValidationMessage, setOneSentenceValidationMessage] = useState('');
    

    const validateOneSentence = (data) => {
      const validationMessage = getOneSentenceValidationMessage(data);
      setOneSentenceValidationMessage(validationMessage);

      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateOneSentence(registerStore.registerData.oneSentence);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const setMinHeight = {
      minHeight: `${componentMinHeight}px`,
    };
    
    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <Textarea
            placeholder={placeholder}
            value={registerStore.registerData.oneSentence}
            onChange={(e) => registerStore.setRegisterData('oneSentence', e.target.value)}
            onFocus={() => setOneSentenceValidationMessage('')}
            onBlur={() => validateOneSentence(registerStore.registerData.oneSentence)}
            maxLength={selsoFieldsMaxLengthLimit.OneSentence}
          />
          <TextLengthBox
            textLength={registerStore.registerData.oneSentence.length}
            minLength={selsoFieldsMinLengthLimit.OneSentence}
            maxLength={selsoFieldsMaxLengthLimit.OneSentence}
            validationMessage={oneSentenceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default OneSentence;

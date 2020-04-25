import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group3.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const OneSentence = inject('registerStore')(
  observer(({ registerStore }) => {
    const placeholder = '35자 이내로 자신에 대해 표현해주세요 :)';
    const [oneSentenceValidationMessage, setOneSentenceValidationMessage] = useState('');

    const validateOneSentence = (data) => {
      setOneSentenceValidationMessage(
        getLengthValidationMessage(
          selsoFieldsMinLengthLimit.OneSentence, selsoFieldsMaxLengthLimit.OneSentence, data
        )
      );
      
      if (data.length === 0) {
        setOneSentenceValidationMessage('자신을 표현할 한 문장을 입력해주세요.');
      }

      return oneSentenceValidationMessage === '';
    }

    const nextTo = () => {
      const isValid = validateOneSentence(registerStore.registerData.oneSentence);
      if (isValid) {
        registerStore.nextTo();
      }
    }

    return (
      <>
        <div className={styles.componentWrapper}>
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
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default OneSentence;

import React, { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const Personality = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const [personalityValidationMessage, setPersonalityValidationMessage] = useState('');
    

    const validatePersonality = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.Personality, selsoFieldsMaxLengthLimit.Personality, data
      );
      setPersonalityValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validatePersonality(registerStore.registerData.personality);
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
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.Personality)}
            value={registerStore.registerData.personality}
            onChange={(e) => registerStore.setRegisterData('personality', e.target.value)}
            onFocus={() => setPersonalityValidationMessage('')}
            onBlur={() => validatePersonality(registerStore.registerData.personality)}
            maxLength={selsoFieldsMaxLengthLimit.Personality}
          />
          <TextLengthBox
            textLength={registerStore.registerData.personality.length}
            minLength={selsoFieldsMinLengthLimit.Personality}
            maxLength={selsoFieldsMaxLengthLimit.Personality}
            validationMessage={personalityValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default Personality;

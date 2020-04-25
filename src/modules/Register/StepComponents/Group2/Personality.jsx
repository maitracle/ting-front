import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const Personality = inject('registerStore')(
  observer(({ registerStore }) => {
    const [personalityValidationMessage, setPersonalityValidationMessage] = useState('');

    const validatePersonality = (data) => {
      setPersonalityValidationMessage(
        getLengthValidationMessage(
          selsoFieldsMinLengthLimit.Personality, selsoFieldsMaxLengthLimit.Personality, data
        )
      );
      
      return personalityValidationMessage === '';
    }

    const nextTo = () => {
      const isValid = validatePersonality(registerStore.registerData.personality);
      if (isValid) {
        registerStore.nextTo();
      }
    }

    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea
            placeholder={placeholder(selsoFieldsMinLengthLimit.Personality)}
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
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Personality;

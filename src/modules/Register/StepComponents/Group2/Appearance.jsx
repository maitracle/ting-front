import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/textLength';


const Appearance = inject('registerStore')(
  observer(({ registerStore }) => {
    const [appearanceValidationMessage, setAppearanceValidationMessage] = useState('');

    const validateAppearance = (data) => {
      setAppearanceValidationMessage(
        getLengthValidationMessage(
          selsoFieldsMinLengthLimit.Appearance, selsoFieldsMaxLengthLimit.Appearance, data
        )
      );
      
      return appearanceValidationMessage === '';
    }

    const nextTo = () => {
      const isValid = validateAppearance(registerStore.registerData.appearance);
      if (isValid) {
        registerStore.nextTo();
      }
    }

    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea
            placeholder={placeholder(selsoFieldsMinLengthLimit.Appearance)}
            value={registerStore.registerData.appearance}
            onChange={(e) => registerStore.setRegisterData('appearance', e.target.value)}
            onFocus={() => setAppearanceValidationMessage('')}
            onBlur={() => validateAppearance(registerStore.registerData.appearance)}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
          />
          <TextLengthBox 
            textLength={registerStore.registerData.appearance.length}
            minLength={selsoFieldsMinLengthLimit.Appearance}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
            validationMessage={appearanceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Appearance;

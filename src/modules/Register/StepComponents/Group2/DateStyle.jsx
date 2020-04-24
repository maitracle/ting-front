import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/textLength';


const DateStyle = inject('registerStore')(
  observer(({ registerStore }) => {
    const [dateStyleValidationMessage, setDateStyleValidationMessage] = useState('');

    const validateDateStyle = (data) => {
      setDateStyleValidationMessage(getLengthValidationMessage(selsoFieldsMinLengthLimit.DateStyle, selsoFieldsMaxLengthLimit.DateStyle, data));
      
      if (dateStyleValidationMessage === '') {
        return true;
      } else {
        return false;
      }
    }

    const nextTo = () => {
      const isValid = validateDateStyle(registerStore.registerData.dateStyle);
      if (isValid) {
        registerStore.nextTo();
      }
    }
    
    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea 
            placeholder={placeholder(selsoFieldsMinLengthLimit.DateStyle)}
            value={registerStore.registerData.dateStyle}
            onChange={(e) => registerStore.setRegisterData('dateStyle', e.target.value)}
            onFocus={() => setDateStyleValidationMessage('')}
            onBlur={() => validateDateStyle(registerStore.registerData.dateStyle)}
            maxLength={selsoFieldsMaxLengthLimit.DateStyle}
          />
          <TextLengthBox
            textLength={registerStore.registerData.dateStyle.length}
            minLength={selsoFieldsMinLengthLimit.DateStyle}
            maxLength={selsoFieldsMaxLengthLimit.DateStyle}
            validationMessage={dateStyleValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default DateStyle;

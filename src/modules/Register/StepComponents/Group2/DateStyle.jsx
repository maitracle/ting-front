import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const DateStyle = inject('registerStore')(
  observer(({ registerStore }) => {
    const minLength = 60;
    const maxLength = 1000;

    const [dateStyleValidationMessage, setDateStyleValidationMessage] = useState('');

    const validateDateStyle = (data) => {
      if (data.length < minLength) {
        setDateStyleValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      }

      setDateStyleValidationMessage('');
      return true;
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
            placeholder={placeholder(minLength)}
            value={registerStore.registerData.dateStyle}
            onChange={(e) => registerStore.setRegisterData('dateStyle', e.target.value)}
            onFocus={() => setDateStyleValidationMessage('')}
            onBlur={() => validateDateStyle(registerStore.registerData.dateStyle)}
            maxLength={maxLength}
          />
          <TextLengthBox
            textLength={registerStore.registerData.dateStyle.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={dateStyleValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default DateStyle;

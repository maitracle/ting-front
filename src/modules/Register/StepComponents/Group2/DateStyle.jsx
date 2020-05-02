import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const DateStyle = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const [dateStyleValidationMessage, setDateStyleValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateDateStyle = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.DateStyle, selsoFieldsMaxLengthLimit.DateStyle, data
      );
      setDateStyleValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateDateStyle(registerStore.registerData.dateStyle);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const componentStyle = {
      minHeight: `calc(${screenHeight}px - 44px - ${headerHeight}px - 125px)`,
    };
    
    return (
      <>
        <div className={styles.componentWrapper} style={componentStyle}>
          <Textarea 
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.DateStyle)}
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

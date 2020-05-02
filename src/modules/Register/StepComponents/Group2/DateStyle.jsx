import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const DateStyle = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const minLength = 60;
    const maxLength = 1000;

    const [dateStyleValidationMessage, setDateStyleValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateDateStyle = (data) => {
      if (data.length < minLength) {
        setDateStyleValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      }  else if (data.length > maxLength) {
        setDateStyleValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setDateStyleValidationMessage('');
      return true;
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

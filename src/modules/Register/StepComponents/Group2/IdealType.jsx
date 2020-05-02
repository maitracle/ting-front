import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const IdealType = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const minLength = 120;
    const maxLength = 1000;
    
    const [idealTypeValidationMessage, setIdealTypeValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateIdealType = (data) => {
      if (data.length < minLength) {
        setIdealTypeValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      } else if (data.length > maxLength) {
        setIdealTypeValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setIdealTypeValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validateIdealType(registerStore.registerData.idealType);
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
            value={registerStore.registerData.idealType}
            onChange={(e) => registerStore.setRegisterData('idealType', e.target.value)}
            onFocus={() => setIdealTypeValidationMessage('')}
            onBlur={() => validateIdealType(registerStore.registerData.idealType)}
            maxLength={maxLength}
          />
          <TextLengthBox
            textLength={registerStore.registerData.idealType.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={idealTypeValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default IdealType;

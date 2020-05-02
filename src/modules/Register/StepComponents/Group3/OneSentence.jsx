import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group3.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const OneSentence = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const placeholder = '35자 이내로 자신에 대해 표현해주세요 :)';
    const minLength = 1;
    const maxLength = 35;

    const [oneSentenceValidationMessage, setOneSentenceValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateOneSentence = (data) => {
      if (data.length === 0) {
        setOneSentenceValidationMessage('자신을 표현할 한 문장을 입력해주세요.');
        return false;
      } else if (data.length < minLength) {
        setOneSentenceValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      } else if (data.length > maxLength) {
        setOneSentenceValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setOneSentenceValidationMessage('');
      return true;
    }

    const nextTo = () => {
      const isValid = validateOneSentence(registerStore.registerData.oneSentence);
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
            placeholder={placeholder}
            value={registerStore.registerData.oneSentence}
            onChange={(e) => registerStore.setRegisterData('oneSentence', e.target.value)}
            onFocus={() => setOneSentenceValidationMessage('')}
            onBlur={() => validateOneSentence(registerStore.registerData.oneSentence)}
            maxLength={maxLength}
          />
          <TextLengthBox
            textLength={registerStore.registerData.oneSentence.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={oneSentenceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default OneSentence;

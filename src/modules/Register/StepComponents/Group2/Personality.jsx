import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Personality = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const minLength = 120;
    const maxLength = 1000;

    const [personalityValidationMessage, setPersonalityValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validatePersonality = (data) => {
      if (data.length < minLength) {
        setPersonalityValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      } else if (data.length > maxLength) {
        setPersonalityValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setPersonalityValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validatePersonality(registerStore.registerData.personality);
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
            value={registerStore.registerData.personality}
            onChange={(e) => registerStore.setRegisterData('personality', e.target.value)}
            onFocus={() => setPersonalityValidationMessage('')}
            onBlur={() => validatePersonality(registerStore.registerData.personality)}
            maxLength={maxLength}
          />
          <TextLengthBox
            textLength={registerStore.registerData.personality.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={personalityValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Personality;

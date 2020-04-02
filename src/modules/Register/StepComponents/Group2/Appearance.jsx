import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';

const Appearance = inject('registerStore')(
  observer(({ registerStore }) => {
    const minLength = 120;
    const maxLength = 1000;
     
    const [appearanceValidationMessage, setAppearanceValidationMessage] = useState('');

    const validateAppearance = (data) => {
      if (data.length < minLength) {
        setAppearanceValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      } else if (data.length > maxLength) {
        setAppearanceValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setAppearanceValidationMessage('');
      return true;
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
            placeholder={placeholder(minLength)}
            value={registerStore.registerData.appearance}
            onChange={(e) => registerStore.setRegisterData('appearance', e.target.value)}
            onFocus={() => setAppearanceValidationMessage('')}
            onBlur={() => validateAppearance(registerStore.registerData.appearance)}
            maxLength={maxLength}
          />
          <TextLengthBox 
            textLength={registerStore.registerData.appearance.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={appearanceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Appearance;

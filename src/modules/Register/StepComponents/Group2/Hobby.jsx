import React , { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Hobby = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const minLength = 120;
    const maxLength = 1000;

    const [hobbyValidationMessage, setHobbyValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateHobby = (data) => {
      if (data.length < minLength) {
        setHobbyValidationMessage(`${minLength}자 이상 입력해주세요.`);
        return false;
      } else if (data.length > maxLength) {
        setHobbyValidationMessage(`${maxLength}자 이하로 입력해주세요.`);
      }

      setHobbyValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validateHobby(registerStore.registerData.hobby);
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
            value={registerStore.registerData.hobby}
            onChange={(e) => registerStore.setRegisterData('hobby', e.target.value)}
            onFocus={() => setHobbyValidationMessage('')}
            onBlur={() => validateHobby(registerStore.registerData.hobby)}
            maxLength={maxLength}
          />
          <TextLengthBox
            textLength={registerStore.registerData.hobby.length}
            minLength={minLength}
            maxLength={maxLength}
            validationMessage={hobbyValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Hobby;

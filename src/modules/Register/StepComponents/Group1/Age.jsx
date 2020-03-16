import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const [ageValidationMessage, setAgeValidationMessage] = useState('');

    const validateAge = (data) => {
      if ( data === '' ) {
        setAgeValidationMessage('나이를 입력해주세요');
        return false;
      } else if (0 < data && data < 19) {
        setAgeValidationMessage('일단은 19세 이상만.');
        return false;
      } else if (19 <=data && data <= 40) {
        setAgeValidationMessage('');
        return true;
      } else {
        setAgeValidationMessage('형식에 맞게 입력해주세요.');
        return false;
      }
    }

    const nextTo = () => {
      const isValid = validateAge(registerStore.registerData.age);
      if (isValid) {
        registerStore.nextTo();
      }
    }

    return (
      <>
        <div className={styles.componentWrapper}>
          <div className={styles.question}>
            <strong>나이</strong>를 알려주세요.
          </div>
          <div className={styles.inputLine}>
            <div className={styles.inputWrapper}>
              <Input
                value={registerStore.registerData.age}
                onChange={(e) => registerStore.setRegisterData('age', e.target.value)}
                align='center'
                validationMessage={ageValidationMessage}
                onFocus={() => setAgeValidationMessage('')}
                onBlur={() => validateAge(registerStore.registerData.age)}
              />
            </div>
            <span className={styles.scaleLabel}>세</span>
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Age;

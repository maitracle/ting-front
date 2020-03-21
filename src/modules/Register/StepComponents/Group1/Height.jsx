import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Height = inject('registerStore')(
  observer(({ registerStore }) => {
    const [heightValidationMessage, setHeightValidationMessage] = useState('');

    const validateHeight = (data) => {
      const heightRegExp = /^\d{3}$/;

      if (data === '') {
        setHeightValidationMessage('키를 입력해주세요.');
        return false;
      // Todos(10000001a): 디테일한 validate condition은 대표님과 논의가 필요합니다.
      } else if (heightRegExp.test(data) === false || data < 100 || data > 250) {
        setHeightValidationMessage('형식에 맞게 입력해주세요.');
        return false;
      }
      
      setHeightValidationMessage('');
      return true;
    }

    const nextTo = () => {
      const isValid = validateHeight(registerStore.registerData.height);
      if (isValid) {
        registerStore.nextTo();
      }
    }
    return (
      <>
        <div className={styles.componentWrapper}>
          <div className={styles.question}>
            <strong>키</strong>를 알려주세요.
          </div>
          <div className={styles.inputLine}>
            <div className={styles.inputWrapper}>
              <Input
                value={registerStore.registerData.height}
                onChange={(e) => registerStore.setRegisterData('height', e.target.value)}
                align='center'
                validationMessage={heightValidationMessage}
                onFocus={() => setHeightValidationMessage('')}
                onBlur={() => validateHeight(registerStore.registerData.height)}
              />
            </div>
            <span className={styles.scaleLabel}>cm</span>
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Height;

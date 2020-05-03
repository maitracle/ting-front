import React, { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Nickname = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const [nicknameValidationMessage, setNicknameValidationMessage] = useState('');
    
    const validateNickname = (data) => {
      const nicknameRegExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{1,8}$/;
      if (data.length === 0) {
        setNicknameValidationMessage('닉네임을 입력해주세요.');
        return false;
      } else if (nicknameRegExp.test(data) === false) {
        setNicknameValidationMessage('8자 이하의 한글로 입력해주세요.');
        return false;
      } else {
        setNicknameValidationMessage('');
        return true;
      }
    };

    const nextTo = () => {
      const isValid = validateNickname(registerStore.registerData.nickname);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const setMinHeight = {
      minHeight: `${componentMinHeight}px`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <div className={styles.question}>
            <strong>닉네임</strong>을 입력해주세요.
          </div>
          <div className={styles.inputLine}>
            <div className={styles.inputWrapper}>
              <Input
                value={registerStore.registerData.nickname}
                onChange={(e) => registerStore.setRegisterData('nickname', e.target.value)}
                validationMessage={nicknameValidationMessage}
                onFocus={() => setNicknameValidationMessage('')}
                onBlur={() => validateNickname(registerStore.registerData.nickname)}
              />
            </div>
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default Nickname;

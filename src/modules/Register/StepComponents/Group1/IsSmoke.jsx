import React, { useCallback, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const IsSmoke = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const setIsSmoke = (value) => registerStore.setRegisterData('isSmoke', value);
    const [radioItemList, setRadioItem] = useState([
      {
        id: 1, text: '비흡연자', value: 'NO', checked: false,
      },
      {
        id: 2, text: '흡연자', value: 'YES', checked: false,
      },
    ]);
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const onClick = useCallback(
      (id, value) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setIsSmoke(value);
      },
      [radioItemList],
    );

    const [isSmokeValidationMessage, setIsSmokeValidationMessage] = useState('');

    const validateIsSmoke = (data) => {
      if (data === '') {
        setIsSmokeValidationMessage('흡연 여부를 선택해주세요.');
        return false;
      }

      setIsSmokeValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validateIsSmoke(registerStore.registerData.isSmoke);
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
          <div className={styles.question}>
            <strong>흡연여부</strong>를 알려주세요.
          </div>
          <div className={styles.radioInputWrapper}>
            <RadioInputSet
              radioItemList={radioItemList}
              onClick={onClick} 
              validationMessage={isSmokeValidationMessage}
            />
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default IsSmoke;

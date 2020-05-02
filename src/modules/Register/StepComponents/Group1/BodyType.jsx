import React, { useCallback, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const BodyType = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const setBodyType = (value) => registerStore.setRegisterData('bodyType', value);
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);
    
    const [radioItemList, setRadioItem] = useState([
      {
        id: 1, text: '슬림', value: 'SLIM', checked: false,
      },
      {
        id: 2, text: '슬림탄탄', value: 'SLIM_TONED', checked: false,
      },
      {
        id: 3, text: '보통', value: 'NORMAL', checked: false,
      },
      {
        id: 4, text: '근육질', value: 'BUFF', checked: false,
      },
      {
        id: 5, text: '통통', value: 'CHUBBY', checked: false,
      },
    ]);

    const onClick = useCallback(
      (id, value) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, checked: true } : { ...radioItem, checked: false })),
        );
        setBodyType(value);
      },
      [radioItemList],
    );

    const [bodyTypeValidationMessage, setBodyTypeValidationMessage] = useState('');

    const validateBodyType = (data) => {
      if (data === '') {
        setBodyTypeValidationMessage('체형을 선택해주세요.');
        return false;
      }

      setBodyTypeValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validateBodyType(registerStore.registerData.bodyType);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const componentStyle = {
      minHeight: `calc(${screenHeight}px - 44px - ${headerHeight}px - 125px)`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={componentStyle} >
          <div className={styles.question}>
            <strong>체형</strong>을 알려주세요.
          </div>
          <div className={styles.radioInputWrapper}>
            <RadioInputSet 
              radioItemList={radioItemList}
              onClick={onClick}
              validationMessage={bodyTypeValidationMessage}
            />
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default BodyType;

import React, { useCallback, useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import RadioInputSet from 'src/components/Input/RadioInputSet';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Religion = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const setReligion = (value) => registerStore.setRegisterData('religion', value);
    const [radioItemList, setRadioItem] = useState([
      {
        id: 1, text: '무교', value: 'NOTHING', checked: false,
      },
      {
        id: 2, text: '기독교', value: 'CHRISTIANITY', checked: false,
      },
      {
        id: 3, text: '천주교', value: 'CATHOLIC', checked: false,
      },
      {
        id: 4, text: '불교', value: 'BUDDHISM', checked: false,
      },
      {
        id: 5, text: '기타', value: 'ETC', checked: false,
      },
    ]);
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const onClick = useCallback(
      (id, value) => {
        setRadioItem(
          radioItemList.map((radioItem) => (radioItem.id === id ? { ...radioItem, value: '', checked: true } : { ...radioItem, value: '', checked: false })),
        );
        setReligion(value);
      },
      [radioItemList],
    );

    const [religionValidationMessage, setReligionValidationMessage] = useState('');

    const validateReligion = (data) => {
      if (data === '') {
        setReligionValidationMessage('종교를 선택해주세요.');
        return false;
      }

      setReligionValidationMessage('');
      return true;
    };

    const nextTo = () => {
      const isValid = validateReligion(registerStore.registerData.religion);
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
            <strong>종교</strong>를 알려주세요.
          </div>
          <div className={styles.radioInputWrapper}>
            <RadioInputSet
              radioItemList={radioItemList}
              onClick={onClick}
              validationMessage={religionValidationMessage}
            />
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Religion;

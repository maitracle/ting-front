import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';

import styles from './Group1.module.scss';


const Age = inject('registerStore')(
  observer(({ registerStore }) => {
    const setAge = (e) => registerStore.setRegisterData('age', e.target.value);
    return (
      <div className={styles.componentWrapper}>
        <div className={styles.question}>
          <strong>나이</strong>를 알려주세요.
        </div>
        <div className={styles.inputLine}>
          <div className={styles.inputWrapper}>
            <Input
              value={registerStore.registerData.age}
              onChange={setAge}
              align='center'
            />
          </div>
          <span className={styles.scaleLabel}>세</span>
        </div>
      </div>
    );
  }),
);

export default Age;

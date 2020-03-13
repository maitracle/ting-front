import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Age = inject('registerStore')(
  observer(({ registerStore, history }) => {
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
              />
            </div>
            <span className={styles.scaleLabel}>세</span>
          </div>
        </div>
        <RegisterBtnSet history={history} />
      </>
    );
  }),
);

export default Age;

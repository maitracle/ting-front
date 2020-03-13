import React from 'react';
import { inject, observer } from 'mobx-react';
import Input from 'src/components/Form/Input';
import styles from './Group1.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Height = inject('registerStore')(
  observer(({ registerStore }) => {
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
              />
            </div>
            <span className={styles.scaleLabel}>cm</span>
          </div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo}/>
      </>
    );
  }),
);

export default Height;

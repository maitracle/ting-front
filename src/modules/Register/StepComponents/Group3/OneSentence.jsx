import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import styles from './Group3.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const OneSentence = inject('registerStore')(
  observer(({ registerStore }) => {
    const placeholder = '35자 이내로 자신에 대해 표현해주세요 :)';
    
    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea
            placeholder={placeholder}
            value={registerStore.registerData.oneSentence}
            onChange={(e) => registerStore.setRegisterData('oneSentence', e.target.value)}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo}/>
      </>
    );
  }),
);

export default OneSentence;

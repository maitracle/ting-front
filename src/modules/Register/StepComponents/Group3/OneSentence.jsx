import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';

import styles from './Group3.module.scss';


const OneSentence = inject('registerStore')(
  observer(({ registerStore }) => {
    const setOneSentence = (e) => registerStore.setRegisterData('oneSentence', e.target.value);
    const placeholder = '35자 이내로 자신에 대해 표현해주세요 :)';
    return (
      <div className={styles.componentWrapper}>
        <Textarea placeholder={placeholder} value={registerStore.registerData.oneSentence} onChange={setOneSentence} />
      </div>
    );
  }),
);

export default OneSentence;

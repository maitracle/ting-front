import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group2.module.scss';


const IdealType = inject('registerStore')(
  observer(({ registerStore }) => {
    const setIdealType = (e) => registerStore.setRegisterData('idealType', e.target.value);
    const placeholder = '120자 이상, 많이 많이 쓸수록 이성분이 매력적으로 생각할거에요 :)';
    const textLength = registerStore.registerData.idealType.length;
    const maxLength = 1000;

    return (
      <div className={styles.componentWrapper}>
        <Textarea placeholder={placeholder} value={registerStore.registerData.idealType} onChange={setIdealType} />
        <TextLengthBox textLength={textLength} maxLength={maxLength}/>
      </div>
    );
  }),
);

export default IdealType;

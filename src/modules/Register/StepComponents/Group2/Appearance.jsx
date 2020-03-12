import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group2.module.scss';


const Appearance = inject('registerStore')(
  observer(({ registerStore }) => {
    const setAppearance = (e) => registerStore.setRegisterData('appearance', e.target.value);
    const placeholder = '120자 이상, 많이 많이 쓸수록 이성분이 매력적으로 생각할거에요 :)';
    const textLength = registerStore.registerData.appearance.length;
    const maxLength = 1000;

    return (
      <div className={styles.componentWrapper}>
        <Textarea placeholder={placeholder} value={registerStore.registerData.appearance} onChange={setAppearance} />
        <TextLengthBox textLength={textLength} maxLength={maxLength}/>
      </div>
    );
  }),
);

export default Appearance;

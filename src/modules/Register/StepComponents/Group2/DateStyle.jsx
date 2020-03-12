import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'

import styles from './Group2.module.scss';


const DateStyle = inject('registerStore')(
  observer(({ registerStore }) => {
    const minLength = 60;
    return (
      <div className={styles.componentWrapper}>
        <Textarea 
          placeholder={placeholder(minLength)}
          value={registerStore.registerData.dateStyle}
          onChange={(e) => registerStore.setRegisterData('dateStyle', e.target.value)}
        />
        <TextLengthBox
          textLength={registerStore.registerData.dateStyle.length}
          maxLength={1000}
        />
      </div>
    );
  }),
);

export default DateStyle;

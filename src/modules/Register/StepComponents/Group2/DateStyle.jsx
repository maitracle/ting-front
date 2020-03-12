import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'

import styles from './Group2.module.scss';


const DateStyle = inject('registerStore')(
  observer(({ registerStore }) => {
    return (
      <div className={styles.componentWrapper}>
        <Textarea 
          placeholder={placeholder(minlength)}
          value={registerStore.registerData.dateStyle}
          onChange={setDateStyle}
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

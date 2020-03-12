import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import {placeholder} from 'src/constants/Register/Group2'

import styles from './Group2.module.scss';


const IdealType = inject('registerStore')(
  observer(({ registerStore }) => {
    const minlength = 120;
    return (
      <div className={styles.componentWrapper}>
        <Textarea
          placeholder={placeholder(minlength)}
          value={registerStore.registerData.idealType}
          onChange={(e) => registerStore.setRegisterData('idealType', e.target.value)}
        />
        <TextLengthBox
          textLength={registerStore.registerData.idealType.length}
          maxLength={1000}
        />
      </div>
    );
  }),
);

export default IdealType;

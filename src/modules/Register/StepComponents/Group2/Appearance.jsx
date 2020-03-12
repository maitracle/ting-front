import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'

import styles from './Group2.module.scss';


const Appearance = inject('registerStore')(
  observer(({ registerStore }) => {
const setAppearance = (e) => registerStore.setRegisterData('appearance', e.target.value);
const minlength = 120;    
return (
      <div className={styles.componentWrapper}>
        <Textarea
          placeholder={placeholder(minlength)}
          value={registerStore.registerData.appearance}
          onChange={(e) => registerStore.setRegisterData('appearance', e.target.value)}
        />
        <TextLengthBox 
          textLength={registerStore.registerData.appearance.length}
          maxLength={1000}
        />
      </div>
    );
  }),
);

export default Appearance;

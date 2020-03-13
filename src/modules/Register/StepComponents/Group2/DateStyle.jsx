import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const DateStyle = inject('registerStore')(
  observer(({ registerStore, history }) => {
    const minLength = 60;
    
    return (
      <>
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
        <RegisterBtnSet history={history} />
      </>
    );
  }),
);

export default DateStyle;

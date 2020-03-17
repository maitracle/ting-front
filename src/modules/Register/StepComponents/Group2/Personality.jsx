import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { placeholder } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';


const Personality = inject('registerStore')(
  observer(({ registerStore }) => {
    const minLength = 120;

    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea
            placeholder={placeholder(minLength)}
            value={registerStore.registerData.personality}
            onChange={(e) => registerStore.setRegisterData('personality', e.target.value)}
          />
          <TextLengthBox
            textLength={registerStore.registerData.personality.length}
            maxLength={1000}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={registerStore.nextTo}/>
      </>
    );
  }),
);

export default Personality;

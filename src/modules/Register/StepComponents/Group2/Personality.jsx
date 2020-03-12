import React from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import styles from './Group2.module.scss';


const Personality = inject('registerStore')(
  observer(({ registerStore }) => {   
    return (
      <div className={styles.componentWrapper}>
        <Textarea
          placeholder={"120자 이상, 많이 많이 쓸수록 이성분이 매력적으로 생각할거에요 :)"}
          value={registerStore.registerData.personality}
          onChange={(e) => registerStore.setRegisterData('personality', e.target.value)}
        />
        <TextLengthBox
          textLength={registerStore.registerData.personality.length}
          maxLength={1000}
        />
      </div>
    );
  }),
);

export default Personality;

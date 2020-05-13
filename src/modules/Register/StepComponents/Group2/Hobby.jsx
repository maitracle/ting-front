import React , { useState, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const Hobby = inject('registerStore')(
  observer(forwardRef(({ registerStore, componentMinHeight }, ref) => {
    const [hobbyValidationMessage, setHobbyValidationMessage] = useState('');
    

    const validateHobby = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.Hobby, selsoFieldsMaxLengthLimit.Hobby, data
      );
      setHobbyValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateHobby(registerStore.registerData.hobby);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const setMinHeight = {
      minHeight: `${componentMinHeight}px`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={setMinHeight}>
          <Textarea
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.Hobby)}
            value={registerStore.registerData.hobby}
            onChange={(e) => registerStore.setRegisterData('hobby', e.target.value)}
            onFocus={() => setHobbyValidationMessage('')}
            onBlur={() => validateHobby(registerStore.registerData.hobby)}
            maxLength={selsoFieldsMaxLengthLimit.Hobby}
          />
          <TextLengthBox
            textLength={registerStore.registerData.hobby.length}
            minLength={selsoFieldsMinLengthLimit.Hobby}
            maxLength={selsoFieldsMaxLengthLimit.Hobby}
            validationMessage={hobbyValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} ref={ref}/>
      </>
    );
  })),
);

export default Hobby;

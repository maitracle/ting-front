import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const IdealType = inject('registerStore')(
  observer(({ registerStore }) => {
    const [idealTypeValidationMessage, setIdealTypeValidationMessage] = useState('');

    const validateIdealType = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.IdealType, selsoFieldsMaxLengthLimit.IdealType, data
      );
      setIdealTypeValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateIdealType(registerStore.registerData.idealType);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    return (
      <>
        <div className={styles.componentWrapper}>
          <Textarea
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.IdealType)}
            value={registerStore.registerData.idealType}
            onChange={(e) => registerStore.setRegisterData('idealType', e.target.value)}
            onFocus={() => setIdealTypeValidationMessage('')}
            onBlur={() => validateIdealType(registerStore.registerData.idealType)}
            maxLength={selsoFieldsMaxLengthLimit.IdealType}
          />
          <TextLengthBox
            textLength={registerStore.registerData.idealType.length}
            minLength={selsoFieldsMinLengthLimit.IdealType}
            maxLength={selsoFieldsMaxLengthLimit.IdealType}
            validationMessage={idealTypeValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default IdealType;

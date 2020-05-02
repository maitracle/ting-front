import React, { useState, useEffect } from 'react';
import { inject, observer } from 'mobx-react';
import Textarea from 'src/components/Input/Textarea';
import TextLengthBox from 'src/components/Validation/TextLengthBox';
import { getPlaceholderMessageByLengthLimit } from 'src/constants/Register/Group2'
import styles from './Group2.module.scss';
import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';
import { getLengthValidationMessage } from 'src/utils/validations';
import { selsoFieldsMinLengthLimit, selsoFieldsMaxLengthLimit } from 'src/constants/fieldsLengthLimits';


const Appearance = inject('registerStore')(
  observer(({ registerStore, headerHeight }) => {
    const [appearanceValidationMessage, setAppearanceValidationMessage] = useState('');
    const [screenHeight, setScreenHeight] = useState();
    
    useEffect(() => {
      setScreenHeight(window.innerHeight);
    }, []);

    const validateAppearance = (data) => {
      const validationMessage = getLengthValidationMessage(
        selsoFieldsMinLengthLimit.Appearance, selsoFieldsMaxLengthLimit.Appearance, data
      );
      setAppearanceValidationMessage(validationMessage);
      
      return validationMessage === '';
    };

    const nextTo = () => {
      const isValid = validateAppearance(registerStore.registerData.appearance);
      if (isValid) {
        registerStore.nextTo();
      }
    };

    const componentStyle = {
      minHeight: `calc(${screenHeight}px - 44px - ${headerHeight}px - 125px)`,
    };

    return (
      <>
        <div className={styles.componentWrapper} style={componentStyle}>
          <Textarea
            placeholder={getPlaceholderMessageByLengthLimit(selsoFieldsMinLengthLimit.Appearance)}
            value={registerStore.registerData.appearance}
            onChange={(e) => registerStore.setRegisterData('appearance', e.target.value)}
            onFocus={() => setAppearanceValidationMessage('')}
            onBlur={() => validateAppearance(registerStore.registerData.appearance)}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
          />
          <TextLengthBox 
            textLength={registerStore.registerData.appearance.length}
            minLength={selsoFieldsMinLengthLimit.Appearance}
            maxLength={selsoFieldsMaxLengthLimit.Appearance}
            validationMessage={appearanceValidationMessage}
          />
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo}/>
      </>
    );
  }),
);

export default Appearance;

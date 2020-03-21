import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './CheckStudentIdCard.module.scss';
import Btn from 'src/components/Button/Btn';


const CheckStudentIdCard = inject('signUpStore')(observer(({ signUpStore }) => {
  const [idCardImage, setIdCardImage] = useState(null);

  const uploadIdCardImage = (e) => {
    setIdCardImage(e.target.files[0]);
  };

  const submit = () => {
    signUpStore.uploadStudentIdCard(idCardImage);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <input type="file" onChange={uploadIdCardImage} accept=".jpg,.png" />
      </div>
      <div className={styles.buttonWrapper}>
        <Btn value={'인증하기'} onClick={submit} />
      </div>
    </div>
  );
}));

export default CheckStudentIdCard;

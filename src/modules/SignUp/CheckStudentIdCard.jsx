import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './CheckStudentIdCard.module.scss';
import Btn from 'src/components/Button/Btn';


const CheckStudentIdCard = inject('signUpStore')(observer(({ signUpStore }) => {
  const [idCard, setIdCard] = useState(null);

  const uploadIdCardImage = (e) => {
    console.log(e.target.files[0]);
    setIdCard(e.target.files[0])
  };

  const submit = () => {
    const formData = new FormData();
    formData.append('file', idCard);
  };

  return (
    <div className={styles.formWrapper}>
      <div className={styles.inputWrapper}>
        <input type="file" name="file" onChange={uploadIdCardImage} />
      </div>
      <div className={styles.buttonWrapper}>
        <Btn value={'인증하기'} onClick={submit} />
      </div>
    </div>
  );
}));

export default CheckStudentIdCard;

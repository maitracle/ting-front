import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import RegisterBtnSet from 'src/modules/Register/RegisterBtnSet';

import styles from './Group3.module.scss'


const Image = inject('registerStore')(
  observer(({ registerStore }) => {
    const [imageSrc, setImageSrc] = useState(null);

    const [validationMessage, setValidationMessage] = useState('');

    const uploadProfileImage = (e) => {
      setValidationMessage('');
      registerStore.setRegisterData('image', e.target.files[0]);
    };

    useEffect(() => {
      if (registerStore.registerData.image) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImageSrc(e.target.result);
        };

        reader.readAsDataURL(registerStore.registerData.image);
      }
    }, [registerStore.registerData.image]);

    const validateImage = () => {
      const maxSize = 5000000;
      if (!registerStore.registerData.image) {
        setValidationMessage('이미지를 업로드해주세요.');

        return false;
      } else if (registerStore.registerData.image.size > maxSize) {
        setValidationMessage('이미지 용량 제한을 초과했습니다. 5mb 이하의 이미지를 올려주세요.');

        return false;
      }

      return true;
    };

    const nextTo = () => {
      const isValid = validateImage();

      if (isValid) {
        registerStore.nextTo();
      }
    };

    return (
      <>
        <div className={styles.componentWrapper}>
          <input className={styles.imageInput} id="profile-image" type="file" onChange={uploadProfileImage} accept=".jpg,.png" />
          <label htmlFor="profile-image">
            <div className={styles.imageLabel}>
              { imageSrc ?
                <img className={styles.imagePreview} src={imageSrc} alt="프로필 이미지 미리보기" />
                :
                <div className={styles.labelDescription}>이미지를 업로드해주세요.</div>
              }
            </div>
          </label>
          <div className={styles.validationMessage}>{validationMessage}</div>
        </div>
        <RegisterBtnSet backTo={registerStore.backTo} nextTo={nextTo} />
      </>
    );
  })
);

export default Image;

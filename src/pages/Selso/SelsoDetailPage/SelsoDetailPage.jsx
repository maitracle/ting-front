import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import Card from 'src/modules/SelsoDetail/Card';
import styles from './SelsoDetailPage.module.scss';
import Modal from 'src/components/Modal';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [kakaoLinkErrorMessage, setKakaoLinkErrorMessage] = useState('');
  
  const getOpenKakaoLink = () => {
    selsoListStore.fetchOpenKakaoLink(selsoListStore.fetchedSelsoDetail.id)
      .then((res) => {
        if (res.status === 200) {
          window.open(res.chatLink);
        }
        else {
          if (res.status === 404) {
            setKakaoLinkErrorMessage('채팅방이 삭제되었습니다.');
          } else {
            setKakaoLinkErrorMessage('잠시 후 다시 시도해주세요.');
          }
          setIsErrorModalOpen(true);
        }    
      });
  };

  return (
    <div className={styles.detailWrapper}>
      <Card selsoDetail={selsoListStore.fetchedSelsoDetail} />
      <div className={styles.buttonBlankBox} />
      <div className={styles.buttonWrapper}>
        <button onClick={getOpenKakaoLink} className={styles.kakaoButton}>오픈 카카오로 연락하기</button>
      </div>
      <Modal
        isOpen={isErrorModalOpen}
        close={()=>setIsErrorModalOpen(false)}
      >
        <p>{kakaoLinkErrorMessage}</p>
      </Modal>
    </div>
  );
}));

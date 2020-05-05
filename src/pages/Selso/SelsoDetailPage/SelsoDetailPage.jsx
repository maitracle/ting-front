import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import Card from 'src/modules/SelsoDetail/Card';
import styles from './SelsoDetailPage.module.scss';
import Modal from 'src/components/Modal';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [KakaoLinkErrorMessage, setKakaoLinkErrorMessage] = useState('');
  
  useEffect(() => {
    if (selsoListStore.choosedSelso) {
      // choosed selso 값이 없을 경우 fetchSelsoDetail function이 undefined를 반환하여 callback을 사용할 수 없다.
      selsoListStore.fetchSelsoDetail()
        .then((res) => {
          if (res?.status === 200) {
            selsoListStore.root.myPointStore.fetchMyPointHistory();
          }
        });
    }
  }, [selsoListStore.choosedSelso]);

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
          <p>{KakaoLinkErrorMessage}</p>
        </Modal>
    </div>
  );
}));

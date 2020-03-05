import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './SelsoDetailPage.module.scss';
import Card from 'src/modules/SelsoDetail/Card';
import Gnb from 'src/components/Gnb';


export const SelsoDetailPage = inject('selsoListStore')(observer(({ selsoListStore }) => {
  useEffect(() => {
    if (selsoListStore.choosedSelso) {
      // choosed selso 값이 없을 경우 fetchSelsoDetail function이 undefined를 반환하여 callback을 사용할 수 없다.
      selsoListStore.fetchSelsoDetail()
        .then((res) => {
          if (res?.status === 200) {
            selsoListStore.root.myPointStore.fetchMyPointHistory();
          }
        })
    }
  }, [selsoListStore.choosedSelso]);

  const getOpenKakaoLink = () => {
    selsoListStore.fetchOpenKakaoLink(selsoListStore.fetchedSelsoDetail.id)
      .then((res) => {
        if (res.status === 200) {
          window.open(res.chatLink);
        }
      })
  };

  return (
    <div className={styles.detailWrapper}>
      <Gnb />
      <div className={styles.gnbBlankBox} />

      <Card selsoDetail={selsoListStore.fetchedSelsoDetail} />

      <div className={styles.buttonBlankBox} />
      <div className={styles.buttonWrapper}>
        <img src={require('src/assets/images/SelsoDetail/HeartButton.png')} className={styles.heartButton} alt={'찜하기 버튼'} />
        <button onClick={getOpenKakaoLink} className={styles.kakaoButton}>오픈 카카오로 연락하기</button>
      </div>
    </div>
  )
}));

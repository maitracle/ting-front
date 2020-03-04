import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import SelsoItemCard from 'src/modules/SelsoList/SelsoItemCard';

import styles from 'src/modules/SelsoList/SelsoList.module.scss';
import Modal from 'src/components/Modal';


const SelsoList = inject('selsoListStore')(observer(({ selsoListStore }) => {
  const [isOpenSpendPointModal, setIsOpenSpendPointModal] = useState(false);

  const alertMethod = () => {
    alert('눌렀다!!!');
  };

  useEffect(() => {
    selsoListStore.setSelsoList();
  }, []);

  const moveToDetailPage = (selsoItem) => (_e) => {
    if (selsoItem.isViewed) {
      selsoListStore.setChoosedSelso(selsoItem);
      return 'selso/detail';
    }
    // else {
    //   setIsOpenSpendPointModal(true);
    // }
  };

  return (
    <div>
      {
        selsoListStore.selsoList.map((selsoItem) => (
          <Link to={moveToDetailPage(selsoItem)} key={selsoItem.id} className={styles.link}>
            <SelsoItemCard selsoItem={selsoItem} />
          </Link>))
      }

      <Modal
        isOpen={isOpenSpendPointModal}
        close={() => setIsOpenSpendPointModal(false)}
        buttonList={[
          <button key='actionButton' className={`${styles.modalButton} ${styles.actionButton}`} onClick={alertMethod}>
            보기
          </button>,
          <button key='cancelButton' className={`${styles.modalButton} ${styles.cancelButton}`} onClick={alertMethod}>
            취소
          </button>,
        ]}
      >
        <div className={styles.modalContents}>
          <span className={styles.highlight}>2포인트</span>를 사용하시고 호주웃는땅쥐님의 셀프 프로필을 보시겠어요?
        </div>
      </Modal>
    </div>

  );
}));

export default SelsoList;



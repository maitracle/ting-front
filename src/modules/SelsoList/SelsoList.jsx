import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

import SelsoItemCard from 'src/modules/SelsoList/SelsoItemCard';

import styles from 'src/modules/SelsoList/SelsoList.module.scss';
import Modal from 'src/components/Modal';


const SelsoList = inject('selsoListStore')(observer(({ selsoListStore }) => {
  const [isOpenSpendPointModal, setIsOpenSpendPointModal] = useState(false);

  const [willMoveDetailPage, setWillMoveDetailPage] = useState(false);

  useEffect(() => {
    selsoListStore.setSelsoList();
  }, []);

  const moveToDetailPageHandler = (selsoItem) => (_e) => {
    selsoListStore.setChoosedSelso(selsoItem);

    if (selsoItem.isViewed) {
      setWillMoveDetailPage(true);
    } else {
      setIsOpenSpendPointModal(true);
    }
  };

  const spendPointAndMoveToDetailPage = () => {
    setWillMoveDetailPage(true);
  };

  return (
    <div>
      {
        selsoListStore.selsoList.map((selsoItem) => (
          <div onClick={moveToDetailPageHandler(selsoItem)} key={selsoItem.id} className={styles.link}>
            <SelsoItemCard selsoItem={selsoItem} />
          </div>))
      }
      <Modal
        isOpen={isOpenSpendPointModal}
        close={() => setIsOpenSpendPointModal(false)}
        buttonList={[
          <button
            key='actionButton'
            className={`${styles.modalButton} ${styles.actionButton}`}
            onClick={spendPointAndMoveToDetailPage}
          >
            보기
          </button>,
          <button
            key='cancelButton'
            className={`${styles.modalButton} ${styles.cancelButton}`}
            onClick={() => setIsOpenSpendPointModal(false)}
          >
            취소
          </button>,
        ]}
      >
        <div className={styles.modalContents}>
          <span className={styles.highlight}>2포인트</span>를 사용하여 { selsoListStore.choosedSelso?.nickname }님의 셀프 프로필을 보시겠어요?
        </div>
      </Modal>
      {
        willMoveDetailPage ? <Redirect to={'selso/detail/'} /> : null
      }
    </div>
  );
}));

export default SelsoList;



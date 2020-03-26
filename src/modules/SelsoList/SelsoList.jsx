import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import Modal from 'src/components/Modal';

import SelsoItemCard from './SelsoItemCard';
import styles from './SelsoList.module.scss';


const SelsoList = inject('selsoListStore')(observer(({ selsoListStore, history }) => {
  const [isOpenSpendPointModal, setIsOpenSpendPointModal] = useState(false);

  useEffect(() => {
    selsoListStore.setSelsoList();
  }, []);

  const moveToDetailPageHandler = (selsoItem) => (_e) => {
    selsoListStore.setChoosedSelso(selsoItem);

    if (selsoItem.isViewed) {
      history.push('selso/detail');
    } else {
      setIsOpenSpendPointModal(true);
    }
  };

  const spendPointAndMoveToDetailPage = () => {
    history.push('selso/detail');
  };

  return (
    <div>
      {
        selsoListStore.selsoList.map((selsoItem) => {
          <div onClick={moveToDetailPageHandler(selsoItem)} key={selsoItem.id} className={styles.link}>
            <SelsoItemCard selsoItem={selsoItem} />
          </div>
        })
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
    </div>
  );
}));

export default SelsoList;

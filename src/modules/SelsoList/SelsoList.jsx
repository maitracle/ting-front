import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import Modal from 'src/components/Modal';

import SelsoItemCard from './SelsoItemCard';
import styles from './SelsoList.module.scss';
import { selsoCost } from 'src/constants/costs';

const SelsoList = inject('selsoListStore', 'userStore', 'myPointStore')(
  observer(({ selsoListStore, userStore, myPointStore, history }) => {
    const [isOpenSpendPointModal, setIsOpenSpendPointModal] = useState(false);
    const [isOpenPointLackModal, setIsOpenPointLackModal] = useState(false);
    const [isOpenHaveNotSelsoProfileModal, setIsOpenHaveNotSelsoProfileModal] = useState(false);
    const [isOpenNotActiveSelsoProfileModal, setIsOpenNotActiveSelsoProfileModal] = useState(false);

    const [userStatus, setUserStatus] = useState('');

    useEffect(() => {
      if (userStore.profile?.gender && userStore.profile?.university) {
        if (userStore.profile.gender === 'MALE') {
          selsoListStore.setSelsoList('FEMALE', userStore.profile.university);
        } else {
          selsoListStore.setSelsoList('MALE', userStore.profile.university);
        }
      }
    }, [userStore.profile?.gender, userStore.profile?.university]);

    useEffect(() => {
      selsoListStore.getMySelsoProfile()
        .then((res) => {
          if (res.status === 404) {
            setUserStatus('NoSelsoProfile');
          } else if (res.data.isActive === false) {
            setUserStatus('NotActive');
          } else {
            setUserStatus('AvailableToUse');
          }
        });
    }, []);

    const moveToDetailPageHandler = (selsoItem) => (_e) => {
      if (userStatus === 'NoSelsoProfile') {
        setIsOpenHaveNotSelsoProfileModal(true);
      } else if (userStatus === 'NotActive') {
        setIsOpenNotActiveSelsoProfileModal(true);
      } else if (userStatus === 'AvailableToUse') {
        selsoListStore.setChoosedSelso(selsoItem);

        if (selsoItem.isViewed) {
          selsoListStore.fetchSelsoDetail()
            .then((res) => {
              if (res.status === 200) {
                history.push('selso/detail');
              }
            });
        } else {
          setIsOpenSpendPointModal(true);
        }
      }

    };

    const spendPointAndMoveToDetailPage = () => {
      selsoListStore.fetchSelsoDetail()
        .then((res) => {
          if (res.status === 200) {
            selsoListStore.root.myPointStore.fetchMyPointHistory();
            history.push('selso/detail');
          } else if (res.status === 403) {
            setIsOpenSpendPointModal(false);
            setIsOpenPointLackModal(true);
          }
        });
    };

    return (
      <div>
        {
          selsoListStore.selsoList.map((selsoItem) => (
            <div onClick={moveToDetailPageHandler(selsoItem)} key={selsoItem.id} className={styles.link}>
              <SelsoItemCard selsoItem={selsoItem} />
            </div>
          ))
        }
        <Modal
          isOpen={isOpenPointLackModal}
          close={() => setIsOpenPointLackModal(false)}
        >
          <p>포인트가 부족합니다.</p>
        </Modal>
        <Modal
          isOpen={isOpenHaveNotSelsoProfileModal}
          close={() => setIsOpenHaveNotSelsoProfileModal(false)}
          buttonList={[
            <button
              key="actionButton"
              className={`${styles.modalButton} ${styles.actionButton}`}
              onClick={() => history.push('/user/register')}
            >
              등록하기
            </button>,
            <button
              key="cancelButton"
              className={`${styles.modalButton} ${styles.cancelButton}`}
              onClick={() => setIsOpenHaveNotSelsoProfileModal(false)}
            >
              취소
            </button>,
          ]}
        >
          <p>셀소 프로필 등록 후 이용해주세요.</p>
        </Modal>
        <Modal
          isOpen={isOpenNotActiveSelsoProfileModal}
          close={() => setIsOpenNotActiveSelsoProfileModal(false)}
          buttonList={[
            <button
              key="actionButton"
              className={`${styles.modalButton} ${styles.actionButton}`}
              onClick={() => history.push('my/profile')}
            >
              공개하기
            </button>,
            <button
              key="cancelButton"
              className={`${styles.modalButton} ${styles.cancelButton}`}
              onClick={() => setIsOpenNotActiveSelsoProfileModal(false)}
            >
              취소
            </button>,
          ]}
        >
          <p>셀소 프로필을 공개 후 이용해주세요.</p>
        </Modal>
        <Modal
          isOpen={isOpenSpendPointModal}
          close={() => setIsOpenSpendPointModal(false)}
          buttonList={[
            <button
              key="actionButton"
              className={`${styles.modalButton} ${styles.actionButton}`}
              onClick={spendPointAndMoveToDetailPage}
            >
              보기
            </button>,
            <button
              key="cancelButton"
              className={`${styles.modalButton} ${styles.cancelButton}`}
              onClick={() => setIsOpenSpendPointModal(false)}
            >
              취소
            </button>,
          ]}
        >
          <div className={styles.modalContents}>
            <span className={styles.highlight}>2포인트</span>
            {`를 사용하여 ${selsoListStore.choosedSelso?.nickname}님의 셀프 프로필을 보시겠어요?`}
          </div>
        </Modal>
      </div>
    );
  })
);

export default SelsoList;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { inject, observer } from 'mobx-react';
import { FiMenu } from 'react-icons/fi';
import SideBar from 'src/components/SideBar';
import styles from './Gnb.module.scss';


export const Gnb = inject('myPointStore')(observer(({ myPointStore }) => {
  const [isOpenSideBarModal, setisOpenSideBarModal] = useState(false);

  return (
    <>
      <div className={styles.gnbWrapper}>
        <div className={styles.gnbContents}>
          <Link to="/selso"><img src={require('src/assets/images/Logo/Camcou.png')} className={styles.logoImage} alt="캠쿠" /></Link>
          <div className={styles.pointWrapper}>
            <div className={styles.point}>
              포인트
              <span className={styles.count}>{ myPointStore.restPoint }</span>
            </div>
          </div>
          <div className={styles.sideBarWrapper}>
            <FiMenu onClick={() => setisOpenSideBarModal(true)} />
            <SideBar
              isOpen={isOpenSideBarModal}
              close={() => setisOpenSideBarModal(false)}
            >
              <Link to="/selso">
                <div className={styles.link} onClick={() => setisOpenSideBarModal(false)}>
                  List보기
                </div>
              </Link>
              <Link to="/my">
                <div className={styles.link} onClick={() => setisOpenSideBarModal(false)}>
                  Mypage
                </div>
              </Link>
              <Link to="/">
                <div className={styles.link} onClick={() => setisOpenSideBarModal(false)}>
                  공지사항
                </div>
              </Link>
              <Link to="/my/question">
                <div className={styles.link} onClick={() => setisOpenSideBarModal(false)}>
                  문의사항
                </div>
              </Link>
            </SideBar>
          </div>
        </div>
      </div>
      <div className={styles.blankBox} />
    </>
  );
}));

import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Gnb.module.scss';
import { inject, observer } from 'mobx-react';


export const Gnb = inject('myPointStore')(observer(({ myPointStore }) => (
  <>
    <div className={styles.gnbWrapper}>
      <div className={styles.gnbContents}>
        <Link to={'/selso'}><img src={require('src/assets/images/Logo/Camcou.png')} className={styles.logoImage} alt={'캠쿠'} /></Link>
        <div className={styles.pointWrapper}>
          <div className={styles.point}>포인트 <span className={styles.count}>{ myPointStore.restPoint }</span></div>
        </div>
      </div>
    </div>
    <div className={styles.blankBox} />
  </>
)));

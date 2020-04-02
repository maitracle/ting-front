import React from 'react';

import styles from './Loading.module.scss';


const Loading = ({ isLoading, phrase = 'Loading...' }) => (
  isLoading ?
    <div className={styles.background}>
      <div className={styles.contentsWrapper}>
        <div className={styles.animation}>
          <div />
          <div />
          <div />
        </div>

        <div className={styles.phrase}>
          { phrase }
        </div>
      </div>
    </div>
    :
    null
);

export default Loading;

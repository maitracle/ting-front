import React from 'react';

import styles from './SideBar.module.scss';

export const SideBar = ({ isOpen, close, children }) => (
  <>
    {
      isOpen
        ? (
          <>
            <div className={styles.modalOverlay} onClick={close} />
            <div className={styles.modalWrapper}>
              <div className={styles.modalContentsWrapper} />
              <div className={styles.buttonWrapper}>
                { children }
              </div>
            </div>
          </>
        )
        : null
    }
  </>
);

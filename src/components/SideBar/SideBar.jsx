import React, { useEffect } from 'react';

import styles from './SideBar.module.scss';

export const SideBar = ({ isOpen, close, SideBarList }) => (
  <>
    {
      isOpen
        ? (
          <>
            <div className={styles.modalOverlay} onClick={close} />
            <div className={styles.modalWrapper}>
              <div className={styles.modalContentsWrapper} />
              <div className={styles.buttonWrapper}>
                { SideBarList }
              </div>
            </div>
          </>
        )
        : null
    }
  </>
);

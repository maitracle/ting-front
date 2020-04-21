import React from 'react';

import styles from './Panel.module.scss';

export const Panel = ({ isOpen, close, children }) => (
  <>
    {
      isOpen
        ? (
          <>
            <div className={styles.panelOverlay} onClick={close} />
            <div className={styles.panelWrapper}>
              <div className={styles.panelContentsWrapper}>
                { children }
              </div>
            </div>
          </>
        )
        : null
    }
  </>
);

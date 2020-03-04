import React, { useEffect } from 'react';

import styles from './Modal.module.scss';

export const Modal = ({ children, title, isOpen, close, buttonList }) => {

  useEffect(() => {
    // Modal 이 처음 close 인 상태로 Mount 될 때 history 에 빈 페이지를 push 한다.
    // isOpen 을 보고있는 effect 에서 history.back()을 무마시키려는 목적이다.
    history.pushState({}, 'modalOpen');
  }, []);

  useEffect(() => {
    if (isOpen) {
      history.pushState({}, 'modalOpen');
    } else {
      history.back();
    }
  }, [isOpen]);

  window.onpopstate = () => {
    if (isOpen) {
      history.pushState({}, 'modalOpen');
      close();
    }
  };

  return (
    <>
      {
        isOpen ?
          <>
            <div className={styles.modalOverlay} onClick={close} />
            <div className={styles.modalWrapper}>
              <div className={styles.modalContentsWrapper}>
                { title ? <p className={styles.title}>{ title }</p> : null }
                <div>
                  { children }
                </div>
              </div>
              <div className={styles.buttonWrapper}>
                { buttonList || [<button className={styles.defaultButton} onClick={close} key={'default'}> 닫기 </button>] }
              </div>
            </div>
          </>
          : null
      }
    </>
  );
};

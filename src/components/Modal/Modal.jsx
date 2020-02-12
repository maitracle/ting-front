import React, { useEffect } from 'react';

import './Modal.scss';

export const Modal = ({ isOpen, close, buttonList }) => {

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
            <div className="modal-overlay" onClick={close} />
            <div className="modal">
              <p className="title">Modal Title</p>
              <div>
                <p>
                  contents
                </p>
              </div>
              <div>
                { buttonList || [<button onClick={close} key={'default'}> default close button </button>] }
              </div>
            </div>
          </>
          : null
      }
    </>
  );
};

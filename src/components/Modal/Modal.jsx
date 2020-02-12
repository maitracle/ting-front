import React from 'react';

export const Modal = () => {
  return (
    <>
      <div className="Modal-overlay" />
      <div className="Modal">
        <p className="title">Modal Title</p>
        <div className="content">
          <p>
            contents
          </p>
        </div>
        <div className="button-wrap">
          <button> Confirm </button>
        </div>
      </div>
    </>
  );
};

import React from 'react';
import './SimpleCard.scss';

export default function SimpleCard({ user }) {
  return (
    <div className="card">
      <div className="left">
        <div className="firstTop">
          <div className="firstTopNickname">{user.nickname}</div>
          <div className="firstTopAge">
            {`'${user.age}살'`}
            <div className="newbox">N</div>
          </div>
          <div className="secondTag">{user.tag}</div>
          <div className="thirdLastword">
            #
            {user.lastTemptingWord}
          </div>
        </div>
      </div>
      <div className="right">
        <p>이미지박스</p>
      </div>
    </div>
  );
}

import React from 'react';
import './SelsoItemCard.scss';

export default function SelsoItemCard({ selsoItem }) {
  return (
    <div className="card">
      <div className="left">
        <div className="firstTop">
          <div className="firstTopNickname">{selsoItem.nickname}</div>
          <div className="firstTopAge">
            {`'${selsoItem.age}살'`}
            <div className="newbox">N</div>
          </div>
          <div className="secondTag">{selsoItem.tags}</div>
          <div className="thirdLastword">
            #
            {selsoItem.lastTemptingWord}
          </div>
        </div>
      </div>
      <div className="right">
        <p>이미지박스</p>
      </div>
    </div>
  );
}

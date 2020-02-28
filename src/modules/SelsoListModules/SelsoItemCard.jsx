import React from 'react';
import { Link } from 'react-router-dom';

import styles from './SelsoItemCard.module.scss';


export default function SelsoItemCard({ selsoItem }) {
  const moveToDetailPage = () => {
    return 'selso/detail';
  };

  return (
    <Link to={moveToDetailPage} className={styles.link}>
      <div className={styles.card}>
        <div className={styles.leftBox}>
          <div className={styles.titleBox}>
            <div className={styles.nickname}>{selsoItem.nickname} </div>
            <div className={styles.age}>
              {`${selsoItem.age}살`}
              <div className={styles.newBox}>N</div>
            </div>
          </div>
          <div className={styles.tags}>{selsoItem.tags}</div>
          <div className={styles.oneSentenceBox}>
            { selsoItem.oneSentence }
          </div>
        </div>
        <div className={styles.rightBox}>
          <img src={selsoItem.image || require('src/assets/images/defaultProfileImage.jpg')} className={styles.image} alt={'프로필 이미지'} />
        </div>
      </div>
    </Link>
  );
}

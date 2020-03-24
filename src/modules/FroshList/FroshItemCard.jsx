import React from 'react';

import styles from './FroshItemCard.module.scss';


const FroshItemCard = ({ froshProfile }) => {
  return (
    <div className={styles.card}>
      id: {froshProfile.id}
    </div>
  );
};

export default FroshItemCard;

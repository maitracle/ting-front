import React from 'react';
import styles from './MyPointHistory.module.scss';


const MyPointHistory = ({item}) => {
  const dateToMonthDay = (date) => date.split('-')[1] + '.' + date.split('-')[2].substring(0,2);
  
  const reasonConverter = {
    "CONFIRM_USER": "학생 인증 보상",
    "SELF_DATE_PROFILE_VIEW": "셀소 프로필 보기",
    "SELF_DATE_SEND_MESSAGE": "셀소 연락하기",
  };

  const consumptionCalculator = {
    "SIGNUP": 30,
    "VIEW_PROFILE": -2,
    "SEND_MESSAGE": -10,
  };

  return(
    <div className={styles.pointHistory}>
      <div className={styles.createdAt}>
        {dateToMonthDay(item.createdAt)}
      </div>
      <div className={styles.reason}>
        {reasonConverter[item.reason]}
      </div>
      <div className={styles.restPointWrapper}>
        <div className={styles.consumedPoint}>
          {consumptionCalculator[item.reason]} 
        </div>
        <div className={styles.restPoint}>
          {item.restCoin}
        </div>
      </div>
    </div>
  )
};

export default MyPointHistory;
import React from 'react';
import styles from './MyDiaHistory.module.scss';


const MyDiaHistory = ({item}) => {
  const dateToMonthDay = (date) => date.split('-')[1] + '.' + date.split('-')[2].substring(0,2);
  
  const reasonConverter = {
    "SIGNUP": "회원가입",
    "VIEW_PROFILE": "셀프 프로필 보기",
    "SEND_MESSAGE": "오픈 카카오 연락하기",
  }

  const consumptionCalculator = {
    "SIGNUP": 30,
    "VIEW_PROFILE": -2,
    "SEND_MESSAGE": -10,
  }

  return(
    <div className={styles.diaHistory}>
      <div className={styles.createdAt}>
        {dateToMonthDay(item.createdAt)}
      </div>
      <div className={styles.reason}>
        {reasonConverter[item.reason]}
      </div>
      <div className={styles.restCoinWrapper}>
        <div className={styles.consumedCoin}>
          {consumptionCalculator[item.reason]} 
        </div>
        <div className={styles.restCoin}>
          {item.restCoin}
        </div>
      </div>
    </div>
  )
}

export default MyDiaHistory;
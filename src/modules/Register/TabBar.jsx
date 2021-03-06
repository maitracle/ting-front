import React from 'react';
import styles from './TabBar.module.scss';


const mapStepToStep = {
  Nickname: '닉네임',
  Height: '키',
  BodyType: '체형',
  Religion: '종교',
  IsSmoke: '흡연여부',
  Appearance: '외모/스타일',
  Personality: '성격',
  Hobby: '취미/여가',
  DateStyle: '연애관',
  IdealType: '이상형',
  OneSentence: '한줄 소개',
  Tags: '간단한 태그',
  Image: '사진',
  ChatLink: '채팅 링크',
};

const TabBar = ({ currentStep, tabList }) => {

  const getRate = () => `${((tabList.indexOf(currentStep) + 1) / tabList.length) * 100}%`;

  return (
    <div className={styles.tabBarWrapper}>
      <div className={styles.tabItemWrapper}>
        {tabList.map((item) => <div className={`${styles.tabItem}`} key={item}>{ mapStepToStep[item] }</div>)}
      </div>
      <div className={styles.tabProgressBar}>
        <div style={{ width: getRate() }} className={styles.tabProgressBarRate} />
      </div>

    </div>
  );
};

export default TabBar;

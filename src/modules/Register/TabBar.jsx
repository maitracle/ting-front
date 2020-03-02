import React from 'react';
import styles from './TabBar.module.scss';


const TabBar = ({ currentStep, tabList }) => {

  const getRate = () => `${((tabList.indexOf(currentStep) + 1) / tabList.length) * 100}%`;

  return (
    <div className={styles.tabBarWrapper}>
      <div className={styles.tabItemWrapper}>
        {tabList.map((item) => <div className={styles.tabItem} key={item}>{item}</div>)}
      </div>
      <div className={styles.tabProgressBar}>
        <div style={{ width: getRate() }} className={styles.tabProgressBarRate} />
      </div>

    </div>
  );
};

export default TabBar;

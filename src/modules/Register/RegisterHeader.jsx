import React from 'react';
import { inject, observer } from 'mobx-react';
import TabBar from 'src/modules/Register/TabBar';
import styles from './RegisterHeader.module.scss';


const mapGroupToTitle = {
  group1: 'group 1 title',
  group2: 'group 2 title',
  group3: 'group 3 title',
  group4: 'group 4 title',

};

export default inject('registerStore')(observer(({ registerStore }) => (
  <div className={styles.registerHeader}>
    <p className={styles.groupTitle}>
      { mapGroupToTitle[registerStore.currentGroup] }
    </p>
    <div className={styles.exampleWrapper}>
          예시)
      <br />
          -우리,잔잔하게 마음을 울리는 연애를 해봐요
      <br />
          서로 믿고 의지할 수 있는 사람을 만나고 싶어요!
    </div>
    <button>예시더보기</button>
    <TabBar currentStep={registerStore.currentStep} tabList={registerStore[registerStore.currentGroup]} />
  </div>
)));

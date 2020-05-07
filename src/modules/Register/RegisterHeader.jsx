/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState, useEffect, forwardRef } from 'react';
import { inject, observer } from 'mobx-react';
import TabBar from 'src/modules/Register/TabBar';

import { StepIndicator } from 'src/components/StepIndicator/StepIndicator';
import { getHeaderExample } from 'src/constants/Register';
import { IoIosArrowDown } from 'react-icons/io';
import styles from './RegisterHeader.module.scss';


const groupNameIndicator = {
  group1: 'Step 1',
  group2: 'Step 2',
  group3: 'Step 3',
  group4: 'Step 4',
};

const mapStepToNameTag = {
  Appearance: <span><strong>외모/스타일</strong>을</span>,
  Personality: <span><strong>성격</strong>을</span>,
  Hobby: <span><strong>취미/여가</strong>를</span>,
  DateStyle: <span><strong>연애관</strong>을</span>,
  IdealType: <span><strong>이상형</strong>을</span>,
  OneSentence: <span><strong>한줄을</strong></span>,
  Tags: <span><strong>간단한 태그</strong>를</span>,
  Image: <span><strong>사진</strong>을</span>,
};

const mapGroupToTitle = {
  group1: {
    first: (value) => <p className={styles.groupTitle}>{ value }님의</p>,
    second: () => <p className={styles.groupTitle}><strong>기본 정보</strong>를 알려주세요.</p>,
  },
  group2: {
    first: (value) => <p className={styles.groupTitle}>{ value }님의</p>,
    second: (value) => <p className={styles.groupTitle}>{ mapStepToNameTag[value] } 알려주세요.</p>,
  },
  group3: {
    first: () => <p className={styles.groupTitle}>프로필 썸네일에 들어갈</p>,
    second: (value) => <p className={styles.groupTitle}>{ mapStepToNameTag[value] } 알려주세요.</p>,
  },
  group4: {
    first: () => <p className={styles.groupTitle}><strong>오픈 카카오톡 링크</strong>를</p>,
    second: () => <p className={styles.groupTitle}>남겨주세요.</p>,
  },
};

export default inject('registerStore')(observer(forwardRef(({ registerStore }, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleExpandExample = () => {
    setIsExpanded(!isExpanded);
  };
  useEffect(() => {
    setIsExpanded(false);
  }, [registerStore.currentStep]);

  const example = getHeaderExample(registerStore.root.userStore.profile.gender, registerStore.currentStep);

  return (
    <div className={styles.registerHeader} ref={ref}>
      <div className={styles.contentsWrapper}>
        <div>
          { mapGroupToTitle[registerStore.currentGroup]?.first(registerStore.root.userStore.profile.nickname) }
          { mapGroupToTitle[registerStore.currentGroup]?.second(registerStore.currentStep) }
        </div>

        <div className={styles.groupIndicator}>
          { groupNameIndicator[registerStore.currentGroup] }
          <StepIndicator stepList={registerStore.groupList} currentStep={registerStore.currentGroup} />
        </div>
        <div className={`${styles.exampleWrapper} ${isExpanded ? styles.expandWrapper : styles.foldWrapper}`}>
          {example}
        </div>
        <button className={`${example ? styles.expandButton : styles.noExample}`} onClick={handleExpandExample}>
          <IoIosArrowDown className={isExpanded ? styles.upArrow : ''} />{isExpanded ? '접기' : '예시 더보기'}
        </button>
      </div>
      <div className={styles.tabBarWrapper}>
        <TabBar currentStep={registerStore.currentStep} tabList={registerStore[registerStore.currentGroup]} />
      </div>
    </div>
  );
})));

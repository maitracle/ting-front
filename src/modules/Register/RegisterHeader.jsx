/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';
import TabBar from 'src/modules/Register/TabBar';

import { StepIndicator } from 'src/components/StepIndicator/StepIndicator';
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

export default inject('registerStore')(observer(({ registerStore }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandExample = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={styles.registerHeader}>
      <div className={styles.contentsWrapper}>
        <div>
          { mapGroupToTitle[registerStore.currentGroup]?.first(registerStore.root.userStore.profile.nickname) }
          { mapGroupToTitle[registerStore.currentGroup]?.second(registerStore.currentStep) }
        </div>

        <div className={styles.groupIndicator}>
          { groupNameIndicator[registerStore.currentGroup] }
          <StepIndicator stepList={registerStore.groupList} currentStep={registerStore.currentGroup} />
        </div>
        <div className={`${expanded ? styles.expandWrapper : styles.exampleWrapper}`}>
        예시)
          <br />
          얼굴은 선하고 순한 강아지상입니다. 동안이고 귀엽다는 이야기를 어렸을 적부터 종종(?!) 들어왔어요. 그래서 ...
          얼굴은 선하고 순한 강아지상입니다. 동안이고 귀엽다는 이야기를 어렸을 적부터 종종(?!) 들어왔어요. 그래서 ...
        </div>
        <button className={styles.expandButton} type="button" onClick={handleExpandExample}>{expanded ? '접기' : '예시 더보기'}</button>
        <div className={styles.tabBarWrapper}>
          <TabBar currentStep={registerStore.currentStep} tabList={registerStore[registerStore.currentGroup]} />
        </div>
      </div>
    </div>
  );
}));

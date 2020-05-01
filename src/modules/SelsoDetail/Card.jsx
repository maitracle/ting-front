import React from 'react';

import styles from './Card.module.scss';


export default ({ selsoDetail }) => {
  const bodyTypeConverter = {
    SLIM: '슬림',
    SLIM_TONED: '슬림탄탄',
    NORMAL: '보통',
    BUFF: '근육질',
    CHUBBY: '통통',
  };

  const religionConverter = {
    NOTHING: '무교',
    CHRISTIANITY: '기독교',
    CATHOLIC: '천주교',
    BUDDHISM: '불교',
    ETC: '기타',
  };

  const isSmokeConverter = {
    NO: '비흡연자',
    YES: '흡연자',
  };


  return (
    <div>
      <div style={{ backgroundImage: `url(${selsoDetail.image})` }} className={styles.image} />

      <section className={styles.listInfoBox}>
        <div className={styles.nicknameWrapper}>
          <div className={styles.nickname}>{selsoDetail.nickname}</div>
          <div className={styles.age}>
            {selsoDetail.age}
살
          </div>
        </div>
        <div className={styles.tags}>
          {selsoDetail.tags}
        </div>
        <div className={styles.oneSentence}>
          {selsoDetail.oneSentence}
        </div>
      </section>

      <section className={styles.basicInfoBox}>
        <div className={styles.basicInfoTitle}>기본 프로필</div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            키
          </div>
          <div>
            {selsoDetail.height}
          </div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            몸매
          </div>
          <div>
            {bodyTypeConverter[selsoDetail.bodyType]}
          </div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            종교
          </div>
          <div>
            {religionConverter[selsoDetail.religion]}
          </div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            흡연여부
          </div>
          <div>
            {isSmokeConverter[selsoDetail.isSmoke]}
          </div>
        </div>
      </section>
      <div className={styles.separator} />

      <section className={styles.questionWrapper}>
        <div className={styles.questionLabel}>
          외모/스타일
        </div>
        <div className={styles.answer}>
          {selsoDetail.appearance}
        </div>
      </section>
      <div className={styles.separator} />

      <section className={styles.questionWrapper}>
        <div className={styles.questionLabel}>
          성격
        </div>
        <div className={styles.answer}>
          {selsoDetail.personality}
        </div>
      </section>
      <div className={styles.separator} />

      <section className={styles.questionWrapper}>
        <div className={styles.questionLabel}>
          취미/여가
        </div>
        <div className={styles.answer}>
          {selsoDetail.hobby}
        </div>
      </section>
      <div className={styles.separator} />

      <section className={styles.questionWrapper}>
        <div className={styles.questionLabel}>
          연애관
        </div>
        <div className={styles.answer}>
          {selsoDetail.appearance}
        </div>
      </section>
      <div className={styles.separator} />

      <section className={styles.questionWrapper}>
        <div className={styles.questionLabel}>
          이상형
        </div>
        <div className={styles.answer}>
          {selsoDetail.idealType}
        </div>
      </section>

    </div>
  );
};

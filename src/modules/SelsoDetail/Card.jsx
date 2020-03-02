import React from 'react';

import styles from './Card.module.scss';


export default ({ selsoDetail }) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${selsoDetail.image})` }} className={styles.image} />

      <section className={styles.listInfoBox}>
        <div className={styles.nicknameWrapper}>
          <div className={styles.nickname}>{selsoDetail.nickname}</div>
          <div className={styles.age}>{selsoDetail.age}살</div>
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
            몸메
          </div>
          <div>
            {selsoDetail.bodyType}
          </div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            종교
          </div>
          <div>
            {selsoDetail.religion}
          </div>
        </div>
        <div className={styles.infoLine}>
          <div className={styles.label}>
            키
          </div>
          <div>
            {selsoDetail.height}
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
}

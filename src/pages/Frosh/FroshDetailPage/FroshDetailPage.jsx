import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import styles from './FroshDetailPage.module.scss';
import { useParams } from 'react-router-dom';


export const FroshDetailPage = inject('froshStore')(observer(({ froshStore }) => {
  const { froshProfileId } = useParams();
  useEffect(() => {
    // fetch frosh profile detail

    if (froshProfileId) {
      console.log(froshProfileId);
      // froshStore.fetchFroshProfileDetail();
    }
  }, [froshProfileId, froshStore.fetchFroshProfileDetail]);

  const getOpenKakaoLink = () => {
    froshStore.fetchOpenKakaoLink(froshProfileId)
      .then((res) => {
        if (res.status === 200) {
          window.open(res.chatLink);
        }
      })
  };

  return (
    <div className={styles.detailWrapper}>
      <div>frosh detail page</div>
      <div>frosh id : {froshProfileId}</div>
    </div>
  )
}));

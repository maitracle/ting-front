import React from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

import FroshItemCard from './FroshItemCard';
import styles from './FroshList.module.scss';


const FroshList = inject('froshStore')(observer(({ froshStore }) => {
  return (
    <div>
      {
        froshStore.froshProfileList.map((froshProfile) => (
            <Link to={`/frosh/${froshProfile.id}`} key={froshProfile.id} className={styles.link}>
              <FroshItemCard froshProfile={froshProfile} />
            </Link>
          )
        )
      }
      frosh
    </div>
  );
}));

export default FroshList;

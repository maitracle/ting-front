import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './GlobalTab.module.scss';


const TabItem = withRouter(({ name, linkTo, imageSrc, selectedImageSrc }) => {
  const isSelected = location.pathname.startsWith(linkTo);
  return (
    <Link to={linkTo} className={styles.tabLink}>
      <div className={styles.tabItem}>
        <img
          src={isSelected ? selectedImageSrc : imageSrc}
          className={styles.image}
          alt={name}
        />
        <div className={isSelected ? styles.labelSelected : ''}>{name}</div>
      </div>
    </Link>
  );
});

export const GlobalTab = () => {
  return (
    <>
      <div className={styles.tabWrapper}>
        <TabItem
          name={'List'}
          linkTo={'/selso'}
          imageSrc={require('src/assets/images/GlobalTab/home.png')}
          selectedImageSrc={require('src/assets/images/GlobalTab/home-selected.png')}
        />
        <TabItem
          name={'ZZim'}
          linkTo={'/zzim'}
          imageSrc={require('src/assets/images/GlobalTab/heart.png')}
          selectedImageSrc={require('src/assets/images/GlobalTab/heart-selected.png')}
        />
        <TabItem
          name={'MyPage'}
          linkTo={'/my'}
          imageSrc={require('src/assets/images/GlobalTab/person.png')}
          selectedImageSrc={require('src/assets/images/GlobalTab/person-selected.png')}
        />
      </div>
      <div className={styles.blankBox} />
    </>
  );
};

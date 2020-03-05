import React from 'react';

import styles from './StepIndicator.module.scss';


export const StepIndicator = ({ stepList, currentStep }) => {
  const selectedStep = stepList.indexOf(currentStep);

  return (
    <>
      <div className={styles.IndicatorWrapper}>
        {
          stepList.map(
            (item, index) =>
              <div
                key={item}
                className={`${styles.IndicatorItem} ${index <= selectedStep ? styles.selected : ''} ${index + 1 === stepList.length ? styles.last : ''}`}
              />
          )
        }
      </div>
    </>
  );
};

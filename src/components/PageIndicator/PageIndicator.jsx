import React from 'react';

import './PageIndicator.scss';


export const PageIndicator = ({ list, currentStep }) => {
  const selectedStep = list.indexOf(currentStep);

  return (
    <>
      <div className={'IndicatorWrapper'}>
        {
          list.map((item, index) => <div key={item} className={`IndicatorItem ${index <= selectedStep ? 'selected' : ''}`} />)
        }
      </div>
    </>
  )
};


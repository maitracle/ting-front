import React from 'react';

import './StepIndicator.scss';


export const StepIndicator = ({ stepList, currentStep }) => {
  const selectedStep = stepList.indexOf(currentStep);

  return (
    <>
      <div className={'IndicatorWrapper'}>
        {
          stepList.map((item, index) => <div key={item} className={`IndicatorItem ${index <= selectedStep ? 'selected' : ''}`} />)
        }
      </div>
    </>
  )
};


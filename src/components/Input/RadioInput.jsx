import React from 'react';
import './RadioInput.scss';

const RadioInput = ({
  id, text, onClick, checked,
}) => (
  <div className={`radioInput${checked ? 'selected' : ''}`} checked={checked} onClick={() => onClick(id, text)}>
    {text}
    {checked ? 'true' : 'false'}
  </div>
);
export default RadioInput;

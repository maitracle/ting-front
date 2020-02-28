import React from 'react';
import './RadioInputSet.scss';

const RadioInput = ({
  id, text, checked, onClick,
}) => (
  <div className={`radioInput${checked ? 'selected' : ''}`} checked={checked} onClick={() => onClick(id, text)}>
    {text}
    {id}
    {checked ? 'true' : 'false'}
  </div>
);
const RadioInputSet = ({
  radios, onClick,
}) => (radios.map((radio) => <RadioInput id={radio.id} text={radio.text} checked={radio.checked} radio={radio} onClick={onClick} />));


export default RadioInputSet;

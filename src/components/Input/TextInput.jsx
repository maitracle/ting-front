import React from 'react';
import './TextInput.scss';

const textInput = ({
  placeholder, value, onChange, text,
}) => (
  <div>
    <input className="textInput" type="text" placeholder={placeholder} value={value} onChange={onChange} />
    {text}
  </div>
);
export default textInput;

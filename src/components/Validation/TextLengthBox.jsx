import React from 'react';

const TextLengthBox = ({ textLength, minLength }) => (
  <div>
    {`${textLength}/${minLength}`}
  </div>
);

export default TextLengthBox;

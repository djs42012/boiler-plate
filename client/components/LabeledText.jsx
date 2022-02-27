import React from 'react';

const LabeledText = ({ label, text }) => (
  <p>
    <strong>{`${label}: `}</strong>
    {text}
  </p>
);

export default LabeledText;

import React from 'react';

const LabeledText = ({ label, text }) => (
  <div>
  <h6>Labeled Text</h6>
    <div>
      <p>
        <strong>{`${label}: `}</strong>
        {text}
      </p>
    </div>
  </div>
);

export default LabeledText;

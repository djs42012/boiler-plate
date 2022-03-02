import React from 'react';
import LabeledText from './LabeledText.jsx';

const TotalsDisplay = () => (
  <div className="innerbox" id="totals">
    <h3>Totals Display</h3>
    <div>
      <LabeledText label="Total of Prop 1" text='0' />
      <LabeledText label="Total of Prop 2" text='0' />
    </div>
    <button id='sync' className="secondary">Action</button>
  </div>
);
export default TotalsDisplay;

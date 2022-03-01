import React from 'react';
import LabeledText from './LabeledText';

const TotalsDisplay = ({
  prop1,
  prop2,
  prop3,
  action1,
}) => (
  <div className="innerbox" id="totals">
    <div>
      <LabeledText label="Total Prop 1" text={prop1} />
      <LabeledText label="Total Prop 2" text={prop2} />
    </div>
    <button id='sync' className="secondary" onClick={action1}>Action 1</button>
  </div>
);
export default TotalsDisplay;

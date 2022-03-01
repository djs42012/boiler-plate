import React from 'react';
import LabeledText from './LabeledText';

const Asset= ({
  prop1,
  prop2,
  prop3,
  action1,
  action2,
}) => (
  <div className="assetBox">
    <LabeledText label="Prop 1" text={prop1} />
    <LabeledText label="Prop 2" text={prop2} />
    <LabeledText label="Prop 3" text={prop3} />
    <div className="flex">
      <button className='action1' onClick={action1}>+</button>
      <button className='action2' onClick={action2}>-</button>
    </div>
  </div>
);

export default Asset;

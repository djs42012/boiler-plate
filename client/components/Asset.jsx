import React from 'react';
import LabeledText from './LabeledText.jsx';

const Asset= () => (
  <div className="assetBox">
    <h3>Asset</h3>
    <div>
      <LabeledText label="Prop 1" text='text' />
      <LabeledText label="Prop 2" text='text' />
      <LabeledText label="Prop 3" text='text' />
    </div>
    <div className="flex">
      <button className='action1'>Action</button>
      <button className='action2'>Action</button>
    </div>
  </div>
);

export default Asset;

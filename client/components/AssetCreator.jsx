import React from 'react';

const AssetCreator = ({
  value1,
  action1,
  action2,
}) => (
  <div>
    <form onSubmit={action2}>
      <input
        id="value-1"
        value={value1}
        onChange={e => action1(e.target.value)}
      />
      <button id='action-2' className="primary" type="submit">Action 2</button>
    </form>
  </div>
);

export default AssetCreator;

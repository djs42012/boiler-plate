import React from 'react';

const AssetCreator = () => (
  <div>
    <h4>Asset Creator</h4>
    <div>
      <form onSubmit={console.log('you clicked me')}>
        <input
          id="value-1"
          onChange={e => action1(e.target.value)}
        />
        <button id='action-2' className="primary" type="submit">Action</button>
      </form>
    </div>
  </div>
);

export default AssetCreator;

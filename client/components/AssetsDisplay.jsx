import React from 'react';
import Asset from './Asset';


const assetMaker = (asset, idx, props) => (
  <Asset
    {...asset}
    key={idx}
    index={idx}
    action1={() => props.action1(idx)}
    action2={() => props.action2(idx)}
  />
);

const AssetsDisplay = props => (
  <div className="displayBox">
    <h4>Assets</h4>
    <div className="allAssets">
      {props.assetList.map((asset, idx) => assetMaker(asset, idx, props))}
    </div>
  </div>
);

export default AssetsDisplay;

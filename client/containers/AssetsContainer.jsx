 import React from 'react';
 import AssetCreator from '../components/AssetCreator.jsx';
 import AssetsDisplay from '../components/AssetsDisplay.jsx';
 //import { connect } from 'react-redux';
 //import { bindActionCreators } from 'redux';
 //import * as actions from '../actions/actions.js';
 


 const AssetsContainer = () => (
   <div className="innerbox">
     <h3>Assets Container</h3>
     <div>
      <AssetCreator/>
      <AssetsDisplay/>
     </div>
   </div>
 );
 
 export default AssetsContainer;
 
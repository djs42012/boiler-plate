 import React from 'react';
 import { connect } from 'react-redux';
 import { bindActionCreators } from 'redux';
 const path = require('path');
 

 /* -------------------------------------------------------------------------- */
 /*                                 check paths                                */
 /* -------------------------------------------------------------------------- */

 import * as actions from path.resolve(__dirname, '../actions/actions.js')
 import AssetCreator from path.resolve(__dirname, '../components/AssetCreator.jsx')
 import AssetsDisplay from path.resolve(__dirname, '../components/AssetsDisplay.jsx')
 


 const mapStateToProps = ({ assets }) => ({
   stateItem1: assets.stateItem1,
   stateItem2: assets.stateItem2,
   stateItem3: assets.stateItem3,
 });
 
 const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

 const AssetsContainer = props => (
   <div className="innerbox">
     <AssetCreator
       stateItem1={props.stateItem1}
       action1={props.action1}
       action2={props.action2}
     />
     <AssetsDisplay
       stateItem1={props.stateItem1}
       stateItem3={props.stateItem3}
       action3={props.action3}
       action4={props.action4}
     />
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(AssetsContainer);
 
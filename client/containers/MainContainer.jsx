import React from 'react';
import { connect } from 'react-redux'
const path = require('path');


 /* -------------------------------------------------------------------------- */
 /*                                confirm paths                               */
 /* -------------------------------------------------------------------------- */

 import TotalsDisplay from path.resolve(__dirname, '../components/TotalsDisplay.jsx');
 import AssetsContainer from path.resolve(__dirname, './MainContainer.jsx');
 import * as actions from path.resolve(__dirname, '../actions/actions.js')
 


 const mapStateToProps = ({
   assets: { stateItem1, stateItem2, stateItem3 },
 }) => ({
   stateItem1,
   stateItem2,
   stateItem3,
 });
 
 const mapDispatchToProps = dispatch => ({
   action1: () => dispatch(actions.action1),
 });
 
 const MainContainer = props => (
   <div className="container">
     <div className="outerBox">
       <h1 id="header">Asset's Asset Manager</h1>
       <TotalsDisplay {...props} />
       <AssetsContainer />
     </div>
   </div>
 );
 
 export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
 
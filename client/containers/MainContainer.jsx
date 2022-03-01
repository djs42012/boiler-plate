import React from 'react';
import { connect } from 'react-redux';

import TotalsDisplay from '../components/TotalsDisplay';
import AssetsContainer from './AssetsContainer';
import * as actions from '../actions/actions';
 


 const mapStateToProps = ({
   assets: { stateItem1, stateItem2, stateItem3 },
 }) => ({
   stateItem1,
   stateItem2,
   stateItem3,
 });
 
 const mapDispatchToProps = dispatch => ({
   action1: () => dispatch(actions.someAction1),
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
 
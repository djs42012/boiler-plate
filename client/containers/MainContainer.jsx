import React from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import AssetsContainer from './AssetsContainer.jsx';
//import * as actions from '../actions/actions.js';
//import { connect } from 'react-redux';
 

 
 const MainContainer = () => (
   <div className="mainContainer">
     <h2>Main Container</h2>
     <div className="outerBox">
       <TotalsDisplay />
       <AssetsContainer />
     </div>
   </div>
 );
 
 export default MainContainer;
 
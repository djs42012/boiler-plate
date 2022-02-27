 const path = require('path');
 import { combineReducers } from 'redux';
 
 /* -------------------------------------------------------------------------- */
 /*                                 check paths                                */
 /* -------------------------------------------------------------------------- */

 
 import assetsReducer from path.resolve(__dirname, './assetsReducer.js');
 
 export default combineReducers({
   assets: assetsReducer,
 });
 
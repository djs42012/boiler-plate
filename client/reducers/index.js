 const path = require('path');
 import { combineReducers } from 'redux';
 
 
 import assetsReducer from './assetsReducer.js';
 const reducers = combineReducers({
  assets: assetsReducer,

 })
 
 export default reducers;
 
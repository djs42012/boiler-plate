/* -------------------------------------------------------------------------- */
/*                                 check paths                                */
/* -------------------------------------------------------------------------- */


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const path = require('path');
import reducers from path.resolve(__dirname,'./reducers/index.js')
import { loadAssets } from path.resolve(__dirname, './actions/actions.js');

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(loadAssets());

export default store;

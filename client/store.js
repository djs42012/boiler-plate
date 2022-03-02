import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';
//import thunk from 'redux-thunk';
//import { someAction1 } from './actions/actions';

const store = createStore(
  reducers,
  composeWithDevTools(),
  //composeWithDevTools(applyMiddleware(thunk)),
);
//store.dispatch(someAction1());

export default store;

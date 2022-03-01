import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
//import { someAction1 } from './actions/actions';

const store = createStore(
  reducers,
  //composeWithDevTools(applyMiddleware(thunk)),
  composeWithDevTools(),
);

//store.dispatch(someAction1());

export default store;

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
const path = require('path')

/* -------------------------------------------------------------------------- */
/*                                 check paths                                */
/* -------------------------------------------------------------------------- */

import App from path.resolve(__dirname, '/App.jsx');
import App from path.resolve(__dirname, '/store.js');
//import styles from path.resolve(__dirname, '/scss/styles.scss');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

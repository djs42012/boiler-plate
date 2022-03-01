 const path = require('path')

 /* -------------------------------------------------------------------------- */
 /*                                 check paths                                */
 /* -------------------------------------------------------------------------- */

 
import React from 'react';
import MainContainer from path.resolve(__dirname, '/containers/MainContainer.jsx')

const App = () => (
  <div id="app">
    <h1>This is a Test</h1>
    <MainContainer />
  </div>
);

export default App;

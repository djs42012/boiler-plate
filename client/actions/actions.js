 const path = require('path');

/* -------------------------------------------------------------------------- */
/*          import axios if desired https://axios-http.com/docs/intro         */
/* -------------------------------------------------------------------------- */
import axios from 'axios';


/* -------------------------------------------------------------------------- */
/*                              check your paths                              */
/* -------------------------------------------------------------------------- */
import * as types from path.resolve(__dirname, '../constants/actionTypes.js');


/* -------------------------------------------------------------------------- */
/*                        define actions in the form of                       */
/* -------------------------------------------------------------------------- */
export const doSomethingActionCreator1 = payload => (
  {
    type: types.ACTION_TYPE1,
    payload: payload,
  }
);
export const doSomethingActionCreator1 = payload => (
  {
    type: types.ACTION_TYPE2,
    payload: payload,
  }
);


/* -------------------------------------------------------------------------- */
/*                              or in the form of                             */
/* -------------------------------------------------------------------------- */
export const someAction2 = payload => (dispatch, getState) => {
  if (getState().someStateData === 'some condition') {
    dispatch(
      { 
        type: types.ACTION_TYPE2, 
        payload: payload,
      }
    );
  }
};


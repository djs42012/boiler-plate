const path = require('path')

/* -------------------------------------------------------------------------- */
/*                                 check paths                                */
/* -------------------------------------------------------------------------- */
import * as types from path.resolve(__dirname, '../constants/actionTypes.js');

const initialState = {
    stateItem1: 0,
    stateItem2: 0,
    stateItem3: [],
    stateItem4: 0,
    stateItem5: '',
  };
  
  const assetsReducer = (state = initialState, action) => {
    let stateItem3;
  
    switch (action.type) {
      case types.ACTION_TYPE1: {
        //do some stuff
        return {
          ...state,
          stateItem1,
          stateItem2,
          stateItem3,
          stateItem4,
          stateItem5,
        };
      }

      case types.ACTION_TYPE2: {
        //do some stuff
        return {
          ...state,
          stateItem1,
          stateItem2,
          stateItem3,
          stateItem4,
          stateItem5,
        };
      }

/* -------------------------------------------------------------------------- */
/*                        fill out rest of switch cases                       */
/* -------------------------------------------------------------------------- */

  
      default: {
        return state;
      }
    }
  };
  
  export default assetsReducer;
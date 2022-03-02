import * as types from '../constants/actionTypes';

export const actionCreator1 = payload => (
  {
    type: types.ACTION_TYPE1,
    payload: payload,
  }
);
/* -------------------------- can also take form of ------------------------- */
export const actionCreator2 = payload => (dispatch, getState) => {
  if (getState().someStateData === 'some condition') {
    dispatch(
      { 
        type: types.ACTION_TYPE2, 
        payload: payload,
      }
    );
  }
};


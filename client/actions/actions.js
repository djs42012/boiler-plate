import * as types from '../constants/actionTypes';

export const doSomethingActionCreator1 = payload => (
  {
    type: types.ACTION_TYPE1,
    payload: payload,
  }
);
export const doSomethingActionCreator2 = payload => (
  {
    type: types.ACTION_TYPE2,
    payload: payload,
  }
);

export const someAction1 = payload => (dispatch, getState) => {
  if (getState().someStateData === 'some condition') {
    dispatch(
      { 
        type: types.ACTION_TYPE2, 
        payload: payload,
      }
    );
  }
};

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


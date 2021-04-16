// Libraries
import { AnyAction } from 'redux';
// Action Types
import * as ActionTypes from '../action-types';

export const initialState = { loading: false, response: undefined, error: undefined };

const defaultReducer = (state = initialState, action: AnyAction) => {
  const newState = { ...state };
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN_START:
      newState.loading = true;
      return newState;
    case ActionTypes.AUTH_LOGIN_STOP:
      newState.loading = false;
      return newState;
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      newState.error = undefined;
      newState.response = action.payload;
      return newState;
    case ActionTypes.AUTH_LOGIN_FAIL:
      newState.error = action.payload;
      return newState;
    default:
      return state;
  }
};

export default defaultReducer;

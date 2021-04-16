// Libraries
import { AnyAction } from 'redux';
// Action Types
import * as ActionTypes from '../action-types';

export const initialState = { loading: false, default: undefined };

const authReducer = (state = initialState, action: AnyAction) => {
  const newState = { ...state };
  switch (action.type) {
    case ActionTypes.DEFAULT:
      newState.loading = true;
      return newState;
    default:
      return state;
  }
};

export default authReducer;

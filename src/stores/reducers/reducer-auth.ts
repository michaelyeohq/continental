// Libraries
import { AnyAction } from 'redux';
// Action Types
import * as ActionTypes from '../action-types';
// Initial State
interface IAuthenticate {
  data: string;
  message: string;
}
interface IInitialState {
  loading: boolean;
  authentication?: IAuthenticate | null;
  error?: string;
}
export const initialState: IInitialState = { loading: false, authentication: undefined, error: undefined };
// Reducer
const defaultReducer = (state = initialState, action: AnyAction) => {
  const newState = { ...state };
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN_CLEAR_ERROR:
      newState.error = undefined;
      return newState;
    case ActionTypes.AUTH_LOGIN_START:
      newState.loading = true;
      return newState;
    case ActionTypes.AUTH_LOGIN_STOP:
      newState.loading = false;
      return newState;
    case ActionTypes.AUTH_LOGIN_RESUME:
      newState.error = undefined;
      // @ts-ignore
      newState.authentication = JSON.parse(localStorage.getItem(ActionTypes.AUTH_LOGIN_SUCCESS));
      return newState;
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      newState.error = undefined;
      newState.authentication = action.payload;
      localStorage.setItem(ActionTypes.AUTH_LOGIN_SUCCESS, JSON.stringify(action.payload));
      return newState;
    case ActionTypes.AUTH_LOGIN_FAIL:
      newState.error = action.payload;
      newState.authentication = undefined;
      localStorage.removeItem(ActionTypes.AUTH_LOGIN_SUCCESS);
      return newState;
    default:
      return state;
  }
};

export default defaultReducer;

// Libraries
import React from 'react';
import { AnyAction } from 'redux';
// HTTPs
import { httpApi } from '../https/http-api';
// Action Types
import * as ActionTypes from '../action-types';

interface ILoginActionProps {
  email: string;
  password: string;
}

export const loginAction = (loginData: ILoginActionProps) => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: ActionTypes.AUTH_LOGIN_START });
  try {
    const response = await httpApi.post('/employees/login', loginData);
    dispatch({ type: ActionTypes.AUTH_LOGIN_SUCCESS, payload: response });
  } catch (error) {
    dispatch({ type: ActionTypes.AUTH_LOGIN_FAIL, payload: error.message });
  } finally {
    dispatch({ type: ActionTypes.AUTH_LOGIN_STOP });
  }
};

export default { loginAction };

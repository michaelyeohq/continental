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

export const clearErrorAction = () => ({ type: ActionTypes.AUTH_LOGIN_CLEAR_ERROR });

export const isLoginAction = () => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: ActionTypes.AUTH_LOGIN_RESUME });
};

export const loginAction = (loginData: ILoginActionProps) => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: ActionTypes.AUTH_LOGIN_START });
  try {
    const response = await httpApi.post('/employees/login', loginData);
    dispatch({ type: ActionTypes.AUTH_LOGIN_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: ActionTypes.AUTH_LOGIN_FAIL, payload: error.response.data.message });
  } finally {
    dispatch({ type: ActionTypes.AUTH_LOGIN_STOP });
  }
};

export const logoutAction = () => async (dispatch: React.Dispatch<AnyAction>) => {
  dispatch({ type: ActionTypes.AUTH_LOGIN_START });
  dispatch({ type: ActionTypes.AUTH_LOGIN_FAIL, payload: 'User Logged Out' });
  dispatch({ type: ActionTypes.AUTH_LOGIN_STOP });
};

export default { clearErrorAction, isLoginAction, loginAction, logoutAction };

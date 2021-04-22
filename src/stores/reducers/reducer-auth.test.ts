// Libraries
// Target
import ReducerAuth, { initialState } from './reducer-auth';
// Action Types
import ActionTypes from '../action-types';

describe('[ReducerAuth] Start: ', () => {
  // Set up mockError
  const mockError = 'Login Failed';
  // Set up mock authentication
  const mockAuthentication = { data: 'data', message: 'message' };
  // Tests
  it('should instantiate without crashing.', () => {
    // Check that returned state is defined
    expect(ReducerAuth(undefined, { type: 'undefined' })).toBeDefined();
  });
  it('should return "initialState" if action type is unknown.', () => {
    // Check that returned state matches "initialState"
    expect(ReducerAuth(undefined, { type: 'undefined' })).toMatchObject(initialState);
  });
  it('should return set loading "true" if action type is "AUTH_LOGIN_START".', () => {
    // Check that returned state "loading" is true
    expect(ReducerAuth(undefined, { type: ActionTypes.AUTH_LOGIN_START }).loading).toBeTruthy();
  });
  it('should return set loading "false" if action type is "AUTH_LOGIN_STOP".', () => {
    // Check that returned state "loading" is false
    expect(ReducerAuth({ ...initialState, loading: true }, { type: ActionTypes.AUTH_LOGIN_STOP }).loading).toBeFalsy();
  });
  it('should return set error "undefined" if action type is "AUTH_LOGIN_CLEAR_ERROR".', () => {
    // Check that returned state "error" is toBeUndefined
    expect(ReducerAuth({ ...initialState, error: 'error' }, { type: ActionTypes.AUTH_LOGIN_CLEAR_ERROR }).error).toBeUndefined();
  });
  it('should return set error "undefined" and authentication is populated if action type is "AUTH_LOGIN_RESUME".', () => {
    // Set up mock for localStorage
    jest.spyOn(Storage.prototype, 'getItem').mockImplementationOnce(() => JSON.stringify(mockAuthentication));
    // Get returned state
    const state = ReducerAuth({ ...initialState, error: 'error' }, { type: ActionTypes.AUTH_LOGIN_RESUME });
    // Check that returned state "error" is toBeUndefined
    expect(state.error).toBeUndefined();
    // Check that state "authentication" is "mockAuthentication"
    expect(state.authentication).toMatchObject(mockAuthentication);
  });
  it('should return set error "undefined" and authentication is populated if action type is "AUTH_LOGIN_SUCCESS".', () => {
    // Set up mock localStorage.setItem
    const mockSetItem = jest.fn();
    // Set up mock for localStorage
    jest.spyOn(Storage.prototype, 'setItem').mockImplementationOnce(mockSetItem);
    // Check that mockSetItem have not been called
    expect(mockSetItem).toHaveBeenCalledTimes(0);
    // Get returned state
    const state = ReducerAuth({ ...initialState, error: 'error' }, { type: ActionTypes.AUTH_LOGIN_SUCCESS, payload: mockAuthentication });
    // Check that mockSetItem has been called once
    expect(mockSetItem).toHaveBeenCalledTimes(1);
    // Check that returned state "error" is toBeUndefined
    expect(state.error).toBeUndefined();
    // Check that state "authentication" is "mockAuthentication"
    expect(state.authentication).toMatchObject(mockAuthentication);
  });
  it('should return set error "Login Failed" and authentication is populated if action type is "AUTH_LOGIN_FAIL".', () => {
    // Set up mock localStorage.setItem
    const mockRemoveItem = jest.fn();
    // Set up mock for localStorage
    jest.spyOn(Storage.prototype, 'removeItem').mockImplementationOnce(mockRemoveItem);
    // Check that mockRemoveItem have not been called
    expect(mockRemoveItem).toHaveBeenCalledTimes(0);
    // Get returned state
    const state = ReducerAuth({ ...initialState, authentication: mockAuthentication }, { type: ActionTypes.AUTH_LOGIN_FAIL, payload: mockError });
    // Check that mockRemoveItem has been called once
    expect(mockRemoveItem).toHaveBeenCalledTimes(1);
    // Check that returned state "error" is toBeUndefined
    expect(state.error).toBe(mockError);
    // Check that state "authentication" is "mockAuthentication"
    expect(state.authentication).toBeUndefined();
  });
});

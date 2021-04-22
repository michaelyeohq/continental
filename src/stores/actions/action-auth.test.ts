// Libraries
import configureMockStore, { MockStore, MockStoreCreator } from 'redux-mock-store';
import thunk from 'redux-thunk';
// Target
import ActionAuth from './action-auth';
// Action Types
import ActionTypes from '../action-types';
// Reducers
import { initialState } from '../reducers/reducer-auth';
// HTTPs
import httpApi from '../https/http-api';

describe('[ActionAuth] Start: ', () => {
  // Initialization
  let middlewares: any[];
  let mockStore: MockStoreCreator;
  let store: MockStore;
  // Before All
  beforeAll(() => {
    // Set up mock store
    middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
  });

  // Before Each
  beforeEach(() => {
    store = mockStore(initialState);
  });
  // After Each
  afterEach(() => {
    store.clearActions();
  });
  // Tests
  it('should instantiate without crashing.', () => {
    expect(ActionAuth).toBeDefined();
  });
  it('should return AUTH_LOGIN_CLEAR_ERROR when "clearErrorAction" is fired.', () => {
    expect(ActionAuth.clearErrorAction()).toMatchObject({ type: ActionTypes.AUTH_LOGIN_CLEAR_ERROR });
  });
  it('should return AUTH_LOGIN_RESUME when "isLoginAction" is fired.', () => {
    // Set up expected actions
    const expectedActions = [{ type: ActionTypes.AUTH_LOGIN_RESUME }];
    // Trigger dispatch
    // @ts-ignore
    store.dispatch(ActionAuth.isLoginAction()).then(() => {
      // Check if returned actions matches expected actions
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('should return AUTH_LOGIN_START, AUTH_LOGIN_FAIL, and AUTH_LOGIN_STOP when "loginAction" is fired with failed login.', done => {
    // Set up error
    const error = { response: { data: { message: 'Failed Login' } } };
    // Set up mock for "httpApi.post" to throw error
    jest.spyOn(httpApi, 'post').mockImplementationOnce(() => Promise.reject(error));
    // Set up expected actions
    const expectedActions = [
      { type: ActionTypes.AUTH_LOGIN_START },
      { type: ActionTypes.AUTH_LOGIN_FAIL, payload: error.response.data.message },
      { type: ActionTypes.AUTH_LOGIN_STOP },
    ];
    // Trigger dispatch
    // @ts-ignore
    store.dispatch(ActionAuth.loginAction()).then(() => {
      // Check if returned actions matches expected actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should return AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS, and AUTH_LOGIN_STOP when "loginAction" is fired with successful login.', done => {
    // Set up response
    const response = { data: 'test' };
    // Set up mock for "httpApi.post" to throw error
    jest.spyOn(httpApi, 'post').mockImplementationOnce(() => Promise.resolve(response));
    // Set up expected actions
    const expectedActions = [
      { type: ActionTypes.AUTH_LOGIN_START },
      { type: ActionTypes.AUTH_LOGIN_SUCCESS, payload: response.data },
      { type: ActionTypes.AUTH_LOGIN_STOP },
    ];
    // Trigger dispatch
    // @ts-ignore
    store.dispatch(ActionAuth.loginAction()).then(() => {
      // Check if returned actions matches expected actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  it('should return AUTH_LOGIN_START, AUTH_LOGIN_FAIL, and AUTH_LOGIN_STOP when "logoutAction" is fired.', done => {
    // Set up expected actions
    const expectedActions = [
      { type: ActionTypes.AUTH_LOGIN_START },
      { type: ActionTypes.AUTH_LOGIN_FAIL, payload: 'User Logged Out' },
      { type: ActionTypes.AUTH_LOGIN_STOP },
    ];
    // Trigger dispatch
    // @ts-ignore
    store.dispatch(ActionAuth.logoutAction()).then(() => {
      // Check if returned actions matches expected actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});

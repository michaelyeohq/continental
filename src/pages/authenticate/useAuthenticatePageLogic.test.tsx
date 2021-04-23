// Libraries
import { act, renderHook } from '@testing-library/react-hooks';
// Target
import useAuthenticatePageLogic from './useAuthenticatePageLogic';
// Stores
import { initialState } from '../../stores/reducers/reducer-auth';

describe('[useAuthenticatePageLogic] Start: ', () => {
  // Initialization
  let instance: any;
  let baseProps: any;
  // BeforeEach
  beforeEach(() => {
    // Set baseProps
    baseProps = {
      loginForm: { email: { value: 'email' }, password: { value: 'password' } },
      authStore: initialState,
      clearError: jest.fn(),
      login: jest.fn(),
      logout: jest.fn(),
    };
    // Render instance
    instance = renderHook(() => useAuthenticatePageLogic(baseProps));
  });
  // AfterEach
  afterEach(() => {
    jest.clearAllMocks();
  });
  // Tests
  it('should instantiate without crashing.', () => {
    // Check if wrapper is defined
    expect(instance).toBeDefined();
  });
  it('should set "showErrorMessage" to false when "closeErrorMessageHandler" is triggered.', () => {
    // Abstract result from instance
    const { result } = instance;
    // Set "showErrorMessage" to true
    act(() => result.current.setShowErrorMessage(true));
    // Check "showErrorMessage" is true
    expect(result.current.showErrorMessage).toBeTruthy();
    // Trigger "closeErrorMessageHandler"
    act(() => result.current.closeErrorMessageHandler());
    // Check "showErrorMessage" is false
    expect(result.current.showErrorMessage).toBeFalsy();
  });
  it('should trigger "clearError" when "closeErrorMessageHandler" is triggered.', async () => {
    // Abstract result from instance
    const { result } = instance;
    // Check that "baseProps.clearError" have not been called
    expect(baseProps.clearError).toHaveBeenCalledTimes(0);
    // Trigger "closeErrorMessageHandler"
    act(() => result.current.closeErrorMessageHandler());
    // Check that "baseProps.clearError" have been called once
    expect(baseProps.clearError).toHaveBeenCalledTimes(1);
  });
  it('should trigger "setLoginForm" when "loginFormChangeHandler" is triggered.', () => {
    // Abstract result from instance
    const { result } = instance;
    // Check "showErrorMessage" is true
    expect(result.current.loginForm).toMatchObject(baseProps.loginForm);
    // Setup mock event call
    const mockEvent = { target: { name: 'test', value: 'test' } };
    // Trigger "closeErrorMessageHandler"
    act(() => result.current.loginFormChangeHandler(mockEvent));
    // Check "showErrorMessage" is false
    expect(result.current.loginForm[mockEvent.target.name].value).toBe(mockEvent.target.value);
  });
  it('should trigger "login" when "loginHandler" is triggered.', () => {
    // Abstract result from instance
    const { result } = instance;
    // Check that "login" has not been called
    expect(baseProps.login).toHaveBeenCalledTimes(0);
    // Setup mock event call
    const mockEvent = { preventDefault: jest.fn() };
    // Trigger "loginHandler"
    act(() => result.current.loginHandler(mockEvent));
    // Check that "login" have been called once
    expect(baseProps.login).toHaveBeenCalledTimes(1);
  });
  it('should trigger "logout" when "logoutHandler" is triggered.', () => {
    // Abstract result from instance
    const { result } = instance;
    // Check that "login" has not been called
    expect(baseProps.logout).toHaveBeenCalledTimes(0);
    // Setup mock event call
    const mockEvent = { preventDefault: jest.fn() };
    // Trigger "loginHandler"
    act(() => result.current.logoutHandler(mockEvent));
    // Check that "login" have been called once
    expect(baseProps.logout).toHaveBeenCalledTimes(1);
  });
});

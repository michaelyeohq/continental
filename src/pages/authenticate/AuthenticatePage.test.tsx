// Libraries
import { render, screen, fireEvent, cleanup, RenderResult } from '@testing-library/react';
import configureMockStore, { MockStore, MockStoreCreator } from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// Target
import AuthenticatePageConnected, { AuthenticatePage } from './AuthenticatePage';
// Stores
import { initialState } from '../../stores/reducers/reducer-auth';
// Action Creators
import ActionAuth from '../../stores/actions/action-auth';

describe('[AuthenticatePage] Start: ', () => {
  // Initialization
  let baseProps: any;
  let rendered: RenderResult;
  // BeforeEach
  beforeEach(() => {
    // Set baseProps
    baseProps = { authStore: initialState, cleanError: jest.fn(), login: jest.fn(), logout: jest.fn() };
    // Render view
    rendered = render(<AuthenticatePage {...baseProps} />);
  });
  // After Each
  afterEach(cleanup);
  // Tests
  it('should render without crashing.', () => {
    // Check if AuthenticatePage is in the document
    expect(screen.queryByTestId('AuthenticatePage')).toBeInTheDocument();
  });
  it('should render "Sign In" button when "authStore.authentication" is null.', () => {
    // Check that AuthenticatePage-LoginBtn is in document
    expect(screen.queryByText('Log In')).toBeInTheDocument();
    // Check that AuthenticatePage-LogoutBtn is not found
    expect(screen.queryByText('Log Out')).toBeNull();
  });
  it('should render "Sign Out" button when "authStore.authentication" is null.', () => {
    // Set modifiedProps
    const modifiedProps = { ...baseProps, authStore: { ...initialState, authentication: { data: 'data', message: 'message' } } };
    // Rerender view
    rendered.rerender(<AuthenticatePage {...modifiedProps} />);
    // Check that AuthenticatePage-LogoutBtn is in document
    expect(screen.queryByText('Log Out')).toBeInTheDocument();
    // Check that AuthenticatePage-LoginBtn is not found
    expect(screen.queryByText('Log In')).toBeNull();
  });
});

describe('[AuthenticatePageConnected] Start: ', () => {
  // Initialization
  let rendered: RenderResult;
  let middlewares: any[];
  let mockStore: MockStoreCreator;
  let loggedOutStore: MockStore;
  let loggedInStore: MockStore;
  let mockActionCreator: Function;
  // Before All
  beforeAll(() => {
    // Set up mock store
    middlewares = [thunk];
    mockStore = configureMockStore(middlewares);
  });
  // Before Each
  beforeEach(() => {
    // Setup mock action creators
    mockActionCreator = jest.fn(() => ({
      type: 'TEST',
    }));
    // Setup stores
    loggedOutStore = mockStore(() => ({ authStore: { ...initialState, error: 'error' } }));
    loggedInStore = mockStore(() => ({ authStore: { ...initialState, authentication: { data: 'data', message: 'message' } } }));
    // Render view
    rendered = render(
      <Provider store={loggedOutStore}>
        <AuthenticatePageConnected />
      </Provider>,
    );
  });
  // After Each
  afterEach(() => {
    jest.clearAllMocks();
    loggedOutStore.clearActions();
    loggedInStore.clearActions();
    cleanup();
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if AuthenticatePage is in the document
    expect(screen.getByTestId('AuthenticatePage')).toBeInTheDocument();
  });
  it('should fire "ActionAuth.loginAction" when button with "Log In" text is clicked.', () => {
    // Setup mock listener for "ActionAuth.loginAction"
    const mockLoginAction = mockActionCreator;
    // @ts-ignore
    jest.spyOn(ActionAuth, 'loginAction').mockImplementationOnce(mockLoginAction);
    // Check that "store.getActions" has no actions
    expect(loggedOutStore.getActions().length).toBe(0);
    // Check that "ActionAuth.loginAction" has not been called
    expect(mockLoginAction).toHaveBeenCalledTimes(0);
    // Trigger click event on button with "Log In" text
    fireEvent.click(screen.getByText('Log In'));
    // Check that "store.getActions" have at least one actions
    expect(loggedOutStore.getActions().length).toBeGreaterThan(0);
    // Check that "ActionAuth.loginAction" has been called once
    expect(mockLoginAction).toHaveBeenCalledTimes(1);
  });
  it('should fire "ActionAuth.logoutAction" when button with "Log Out" text is clicked.', () => {
    // Setup mock listener for "ActionAuth.mockLogoutAction"
    const mockLogoutAction = mockActionCreator;
    // @ts-ignore
    jest.spyOn(ActionAuth, 'logoutAction').mockImplementationOnce(mockLogoutAction);
    // Render view
    rendered.rerender(
      <Provider store={loggedInStore}>
        <AuthenticatePageConnected />
      </Provider>,
    );
    // Check that "store.getActions" has no actions
    expect(loggedInStore.getActions().length).toBe(0);
    // Check that "ActionAuth.loginAction" has not been called
    expect(mockLogoutAction).toHaveBeenCalledTimes(0);
    // Trigger click event on button with "Log Out" text
    fireEvent.click(screen.getByText('Log Out'));
    // Check that "store.getActions" have at least one actions
    expect(loggedInStore.getActions().length).toBeGreaterThan(0);
    // Check that "ActionAuth.loginAction" has been called once
    expect(mockLogoutAction).toHaveBeenCalledTimes(1);
  });
  it('should fire "ActionAuth.clearErrorAction" when button with testId "AuthenticatePage-Snackbar-Button" is clicked.', () => {
    // Setup mock listener for "ActionAuth.mockClearErrorAction"
    const mockClearErrorAction = mockActionCreator;
    // @ts-ignore
    jest.spyOn(ActionAuth, 'clearErrorAction').mockImplementationOnce(mockClearErrorAction);
    // Check that "store.getActions" has no actions
    expect(loggedOutStore.getActions().length).toBe(0);
    // Check that "ActionAuth.loginAction" has not been called
    expect(mockClearErrorAction).toHaveBeenCalledTimes(0);
    // Trigger click event on button with testId "AuthenticatePage-Snackbar-Button" text
    fireEvent.click(screen.getByTestId('AuthenticatePage-Snackbar-Button'));
    // Check that "store.getActions" have at least one actions
    expect(loggedOutStore.getActions().length).toBeGreaterThan(0);
    // Check that "ActionAuth.loginAction" has been called once
    expect(mockClearErrorAction).toHaveBeenCalledTimes(1);
  });
  it('should remove modal with testId "AuthenticatePage-Modal" when background fade is clicked.', () => {
    // Check that AuthenticatePage-Modal is in the document
    expect(screen.queryByTestId('AuthenticatePage-Modal')).toBeInTheDocument();
    // Trigger click event on fade background
    // @ts-ignore
    fireEvent.click(screen.getByTestId('AuthenticatePage-Modal').firstChild);
    // Check that AuthenticatePage-Modal is not in the document
    expect(screen.queryByTestId('AuthenticatePage-Modal')).toBeNull();
  });
  it('should render modal with testId "AuthenticatePage-Modal" when button with "Sign In" is clicked.', () => {
    // Trigger click event on fade background
    // @ts-ignore
    fireEvent.click(screen.getByTestId('AuthenticatePage-Modal').firstChild);
    // Check that AuthenticatePage-Modal is not in the document
    expect(screen.queryByTestId('AuthenticatePage-Modal')).toBeNull();
    // Trigger click event on button with "Sign In" text
    fireEvent.click(screen.getByText('Sign In'));
    // Check that AuthenticatePage-Modal is in the document
    expect(screen.queryByTestId('AuthenticatePage-Modal')).toBeInTheDocument();
  });
});

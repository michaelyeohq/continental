// Libraries
import { render, RenderResult } from '@testing-library/react';
// Target
import { AuthenticatePage } from './AuthenticatePage';
// Stores
import { initialState } from '../../stores/reducers/reducer-auth';

describe('[AuthenticatePage] Start: ', () => {
  // Initialization
  let wrapper: Element;
  let baseProps: any;
  let rendered: RenderResult;
  // BeforeEach
  beforeEach(async () => {
    // Set baseProps
    baseProps = { authStore: initialState, cleanError: jest.fn(), login: jest.fn(), logout: jest.fn() };
    // Render view
    rendered = render(<AuthenticatePage {...baseProps} />);
    // Store root element in wrapper
    wrapper = await rendered.findByTestId('AuthenticatePage');
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if wrapper is defined
    expect(wrapper).toBeTruthy();
  });
  it('should render AuthenticatePage-Modal on mount.', async () => {
    const modal = await rendered.findByTestId('AuthenticatePage-Modal');
    expect(modal).toBeTruthy();
  });
});

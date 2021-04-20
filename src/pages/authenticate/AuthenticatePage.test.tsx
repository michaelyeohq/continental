// Libraries
import { render, screen } from '@testing-library/react';
// Target
import { AuthenticatePage } from './AuthenticatePage';
// Stores
import { initialState } from '../../stores/reducers/reducer-auth';

describe('[AuthenticatePage] Start: ', () => {
  // Initialization
  let wrapper: Element;
  let baseProps: any;
  // BeforeEach
  beforeEach(async () => {
    // Set baseProps
    baseProps = { authStore: initialState, cleanError: jest.fn(), login: jest.fn(), logout: jest.fn() };
    // Render view
    render(<AuthenticatePage {...baseProps} />);
    // Store root element in wrapper
    wrapper = await screen.findByTestId('AuthenticatePage');
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if wrapper is defined
    expect(wrapper).toBeInTheDocument();
  });
});

// Libraries
import { render, screen } from '@testing-library/react';
// Target
import MaterialUIInputField from './MaterialUIInputField';

interface InputAttributes {
  type: string;
  label: string;
  value?: any;
}

interface IMaterialUIInputFieldLogicProps {
  name: any;
  input: InputAttributes;
  onChange: React.ChangeEventHandler;
}

describe('[MaterialUIInputField] Start: ', () => {
  // Initialization
  let wrapper: Element;
  let baseProps: IMaterialUIInputFieldLogicProps;
  // BeforeEach
  beforeEach(async () => {
    // Set baseProps
    baseProps = { name: 'MaterialUIInputField', input: { type: 'text', label: 'TestBasicLabel', value: 'TestBasicValue' }, onChange: jest.fn() };
    // Render view
    render(<MaterialUIInputField {...baseProps} />);
    // Store root element in wrapper
    wrapper = await screen.findByTestId('MaterialUIInputField');
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if wrapper is defined
    expect(wrapper).toBeInTheDocument();
  });
});

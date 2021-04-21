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
  let baseProps: IMaterialUIInputFieldLogicProps;
  // BeforeEach
  beforeEach(() => {
    // Set baseProps
    baseProps = { name: 'MaterialUIInputField', input: { type: 'text', label: 'TestBasicLabel', value: 'TestBasicValue' }, onChange: jest.fn() };
    // Render view
    render(<MaterialUIInputField {...baseProps} />);
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if wrapper is defined
    expect(screen.queryByTestId('MaterialUIInputField')).toBeInTheDocument();
  });
});

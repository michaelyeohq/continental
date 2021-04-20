// Libraries
import { render, RenderResult } from '@testing-library/react';
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
  let rendered: RenderResult;
  // BeforeEach
  beforeEach(async () => {
    // Set baseProps
    baseProps = { name: 'MaterialUIInputField', input: { type: 'text', label: 'TestBasicLabel', value: 'TestBasicValue' }, onChange: jest.fn() };
    // Render view
    rendered = render(<MaterialUIInputField {...baseProps} />);
    // Store root element in wrapper
    wrapper = await rendered.findByTestId('MaterialUIInputField');
  });
  // Tests
  it('should render without crashing.', () => {
    // Check if wrapper is defined
    expect(wrapper).toBeTruthy();
  });
});

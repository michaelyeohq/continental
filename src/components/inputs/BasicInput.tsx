// Libraries
// Logics
import BasicInputLogic from './BasicInputLogic';

const BasicInput = (props: any) => {
  // Custom Hooks
  const { InputField } = BasicInputLogic(props);
  // Render
  return InputField;
};

export default BasicInput;

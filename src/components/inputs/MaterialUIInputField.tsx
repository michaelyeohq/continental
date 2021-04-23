// Libraries
import { TextField } from '@material-ui/core';
// Interfaces
interface IMaterialUIInputFieldProps {
  name: string;
  input: Input;
  onChange: React.ChangeEventHandler;
}

const MaterialUIInputField = (props: IMaterialUIInputFieldProps) => {
  // Generators
  const generateInputField = () => {
    switch (props.input.type) {
      default:
        return (
          <TextField
            data-testid="MaterialUIInputField"
            type={props.input.type}
            name={props.name}
            label={props.input.label}
            onChange={props.onChange}
            value={props.input.value}
            placeholder={props.input.placeholder}
          />
        );
    }
  };
  // Render
  return generateInputField();
};

export default MaterialUIInputField;

// Libraries
import { Button } from '@material-ui/core';
// Logics
import BasicFormLogic from './BasicFormLogic';
// Components
import BasicInput from '../inputs/BasicInput';

interface IBasicFormProps {
  form: FormFields;
  onSubmit: Function;
}

const BasicForm = (props: IBasicFormProps) => {
  // Logics
  const { form, changeHandler } = BasicFormLogic({ form: props.form });
  // Generator
  const generateInputFields = () => Object.keys(form).map(id => <BasicInput key={id} id={id} input={form[id]} onChange={changeHandler} />);

  return (
    <form className="basic-form basic-form-column" onSubmit={event => props.onSubmit(event, form)}>
      {generateInputFields()}
      <Button type="submit" variant="outlined" color="primary">
        Login
      </Button>
    </form>
  );
};

export default BasicForm;

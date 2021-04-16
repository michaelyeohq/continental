// Libraries
import React from 'react';
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
    <form onSubmit={event => props.onSubmit(event, form)}>
      {generateInputFields()}
      <button type="submit">Login</button>
    </form>
  );
};

export default BasicForm;

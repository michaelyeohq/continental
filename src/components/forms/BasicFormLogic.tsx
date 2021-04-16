// Libraries
import React, { useState } from 'react';

interface IBasicFormLogicProps {
  form: FormFields;
}

const BasicFormLogic = (props: IBasicFormLogicProps) => {
  // React Hooks
  const [form, setForm] = useState<FormFields>(props.form);
  // Handlers
  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: {
        ...form[event.target.name],
        value: event.target.value,
      },
    });
  };
  return {
    form,
    setForm,
    changeHandler,
  };
};

export default BasicFormLogic;

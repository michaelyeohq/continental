// Libraries
import React from 'react';
import { TextField } from '@material-ui/core';

interface InputAttributes {
  type: string;
  label: string;
  value?: any;
}

interface IBasicInputLogicProps {
  id: any;
  input: InputAttributes;
  onChange: React.ChangeEventHandler;
}

const BasicInputLogic = (props: IBasicInputLogicProps) => {
  // Generators
  const generateInputField = () => {
    switch (props.input.type) {
      default:
        return <TextField id={props.id} name={props.id} label={props.input.label} onChange={props.onChange} />;
    }
  };
  return { InputField: generateInputField() };
};

export default BasicInputLogic;

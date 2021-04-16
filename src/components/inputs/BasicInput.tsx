// Libraries
import React from 'react';

interface Input {
  type: string;
  label: string;
  value?: any;
}

interface IBasicInputProps {
  id: any;
  input: Input;
  onChange: React.ChangeEventHandler;
}

const BasicInput = (props: IBasicInputProps) => {
  const { id, input, onChange } = props;

  return (
    <div className="basic-input">
      <label className="basic-input-label" htmlFor={id}>
        {input.label}
      </label>
      <input className="basic-input-text" type={input.type} id={id} name={id} value={input.value} onChange={onChange} />
    </div>
  );
};

export default BasicInput;

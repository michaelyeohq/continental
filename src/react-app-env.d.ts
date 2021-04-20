/* eslint-disable no-unused-vars */
/// <reference types="react-scripts" />

/* Redux */
interface InitialState {
  [x: string]: any;
}

interface ILoginActionProps {
  email: string;
  password: string;
}

//

interface FormFields {
  [x: string]: Input;
}

interface Input {
  type: string;
  label: string;
  value?: any;
  placeholder?: string;
}

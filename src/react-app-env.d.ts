/* eslint-disable no-unused-vars */
/// <reference types="react-scripts" />

interface InitialState {
  [x: string]: any;
}

//

interface FormFields {
  [x: string]: Input;
}

interface Input {
  type: string;
  label: string;
  value?: any;
}

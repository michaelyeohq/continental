// Libraries
import React, { useState } from 'react';

interface ILoginActionProps {
  email: string;
  password: string;
}

interface IAuthenticatePageLogicProps {
  login: React.Dispatch<ILoginActionProps>;
}

const AuthenticatePageLogic = (props: IAuthenticatePageLogicProps) => {
  // React Hooks
  const [showModal, setShowModal] = useState(false);
  // Handlers
  const submitHandler = (event: React.FormEvent, data: FormFields) => {
    event.preventDefault();
    props.login({ email: data.email.value, password: data.password.value });
  };
  // Render
  return { showModal, setShowModal, submitHandler };
};

export default AuthenticatePageLogic;

// Libraries
import React, { useEffect, useState } from 'react';

interface IUseAuthenticatePageLogicProps {
  authStore: { [x: string]: any };
  clearError: React.Dispatch<void>;
  login: React.Dispatch<ILoginActionProps>;
  logout: React.Dispatch<void>;
  loginForm: { [x: string]: any };
}

const useAuthenticatePageLogic = (props: IUseAuthenticatePageLogicProps) => {
  // React Hooks useState
  const [loginForm, setLoginForm] = useState(props.loginForm);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
  // React Hooks useEffect
  useEffect(() => {
    setIsLoggedIn(!!props.authStore?.authentication);
    setShowModal(!props.authStore?.authentication);
  }, [props.authStore.authentication]);
  useEffect(() => {
    setErrorMessage(props.authStore.error);
    setShowErrorMessage(!!props.authStore.error);
  }, [props.authStore.error]);
  // Handlers
  const closeErrorMessageHandler = () => {
    setShowErrorMessage(false);
    props.clearError();
  };
  const loginFormChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm({
      ...loginForm,
      [event.target.name]: {
        ...loginForm[event.target.name],
        value: event.target.value,
      },
    });
  };
  const loginHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.login({ email: loginForm.email.value, password: loginForm.password.value });
  };
  const logoutHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.logout();
  };
  // Render
  return {
    isLoggedIn,
    loginForm,
    setLoginForm,
    showModal,
    setShowModal,
    errorMessage,
    showErrorMessage,
    setShowErrorMessage,
    closeErrorMessageHandler,
    loginFormChangeHandler,
    loginHandler,
    logoutHandler,
  };
};

export default useAuthenticatePageLogic;

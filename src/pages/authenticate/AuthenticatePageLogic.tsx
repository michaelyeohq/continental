// Libraries
import React, { useEffect, useState } from 'react';

interface IAuthenticatePageLogicProps {
  authStore: { [x: string]: any };
  clearError: React.Dispatch<void>;
  login: React.Dispatch<ILoginActionProps>;
  logout: React.Dispatch<void>;
}

const AuthenticatePageLogic = (props: IAuthenticatePageLogicProps) => {
  // React Hooks
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState(undefined);
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
    setTimeout(() => props.clearError(), 1000);
  };
  const loginHandler = (event: React.FormEvent, data: FormFields) => {
    event.preventDefault();
    props.login({ email: data.email.value, password: data.password.value });
  };
  const logoutHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.logout();
  };
  // Render
  return {
    isLoggedIn,
    showModal,
    setShowModal,
    errorMessage,
    showErrorMessage,
    setShowErrorMessage,
    closeErrorMessageHandler,
    loginHandler,
    logoutHandler,
  };
};

export default AuthenticatePageLogic;
